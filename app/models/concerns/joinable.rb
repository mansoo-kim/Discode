module Joinable
  extend ActiveSupport::Concern

  included do
    has_many :memberships, as: :joinable, dependent: :destroy

    has_many :members,
      through: :memberships,
      source: :user
  end

end
