class Budget < ApplicationRecord

    belongs_to :user
    validates :month, :year, presence: true

end
