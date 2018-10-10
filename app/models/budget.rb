class Budget < ApplicationRecord

    belongs_to :user
    validates :month, :year, presence: true

    validates :user_id, uniqueness: { scope: [:month, :year] }
end
