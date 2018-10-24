class Budget < ApplicationRecord

    belongs_to :user
    has_many :expenses
    validates :month, :year, :salary, presence: true

    validates :user_id, uniqueness: { scope: [:month, :year] }
end
