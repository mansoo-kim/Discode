# == Schema Information
#
# Table name: friendships
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  status     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Friendship < ApplicationRecord
  validates :friend_id, uniqueness: { scope: :user_id }
  validates :user_id, :friend_id, presence: true
  validates :status, presence: { in: [0,1,2] }

  belongs_to :user

  belongs_to :friend

end
