module Joinable
  extend ActiveSupport::Concern

  included do
    has_many :users, as: :joinable
  end

end
