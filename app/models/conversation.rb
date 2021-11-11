# == Schema Information
#
# Table name: conversations
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Conversation < ApplicationRecord
  include Joinable
  include Messageable

  def display_name
    return self.name if self.name
    self.members.sort{ |a, b| a.username <=> b.username }.map(&:username).join(', ')
  end
end
