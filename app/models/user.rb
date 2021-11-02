# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  dob             :date             not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  tag             :integer          not null
#
class User < ApplicationRecord
  validates :username, length: { in: 2..32, message: "Must be between 2 and 32 in length" }
  validates :username, uniqueness: { scope: :tag, message: "- Too many users have this username, please try another." }
  validates :email, presence: true, uniqueness: { message: "Email is already registered"}
  validates :dob, presence: true
  validates :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true, message: "Must be 6 or more in length" }

  before_validation :ensure_session_token, :ensure_unique_tag

  has_one_attached :pfp

  has_many :messages,
    foreign_key: :sender_id

  has_many :owned_servers,
    class_name: :Server,
    foreign_key: :owner_id

  has_many :memberships

  has_many :servers,
    through: :memberships,
    source: :joinable,
    source_type: :Server

  has_many :conversations,
    through: :memberships,
    source: :joinable,
    source_type: :Conversation

  def ensure_unique_tag
    self.tag ||= self.generate_unique_tag
  end

  def generate_unique_tag
    tag = rand(1000..9999)
    tag = rand(1000..9999) while User.exists?(tag: tag, username: self.username)
    tag
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def self.generate_session_token
    token = SecureRandom.urlsafe_base64
    token = SecureRandom.urlsafe_base64 while User.exists?(session_token: token)
    token
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save
    self.session_token
  end

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

end
