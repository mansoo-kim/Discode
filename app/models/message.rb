# == Schema Information
#
# Table name: messages
#
#  id               :bigint           not null, primary key
#  sender_id        :integer          not null
#  body             :text             not null
#  messageable_id   :integer          not null
#  messageable_type :string           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class Message < ApplicationRecord
  validates :body, presence: true

  belongs_to :sender,
    class_name: :User

  belongs_to :messageable, polymorphic: true
end
