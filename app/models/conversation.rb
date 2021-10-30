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
end
