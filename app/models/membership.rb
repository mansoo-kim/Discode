# == Schema Information
#
# Table name: memberships
#
#  id            :bigint           not null, primary key
#  user_id       :integer          not null
#  joinable_id   :integer          not null
#  joinable_type :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Membership < ApplicationRecord

end
