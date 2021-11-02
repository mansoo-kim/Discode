# == Schema Information
#
# Table name: servers
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Server < ApplicationRecord
  include Joinable

  validates :name, presence: true
  validates :name, length: { in: 2..100, message: "- Must be between 2 and 100 in length" }

  has_one_attached :icon

  belongs_to :owner,
    class_name: :User

  has_many :channels, dependent: :destroy

end
