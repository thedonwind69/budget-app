class Post < ApplicationRecord

    belongs_to :category
    belongs_to :city
    belongs_to :user

    validates :rating, numericality: { 
        only_integer: true,
        greater_than: 0,
        less_than:    6
      }
    
    validates :subject, :content, presence: true

    validates :user_id, uniqueness: { scope: [:city_id, :category_id] }

end
