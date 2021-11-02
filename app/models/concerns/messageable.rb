module Messageable
  extend ActiveSupport::Concern

  included do
    has_many :messages, as: :messageable, dependent: :destroy
  end

end
