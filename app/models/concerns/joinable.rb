module Joinable
  extend ActiveSupport::Concern

  included do
    has_many :memberships, as: :joinable

    has_many :members,
      through: :memberships,
      source: :user
  end

end
