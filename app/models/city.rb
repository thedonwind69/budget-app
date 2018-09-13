class City < ApplicationRecord

    has_many :posts
    
    def average_rating 
        return nil if self.posts.length == 0
        totalRating = 0
        self.posts.each do |post| 
            totalRating += post.rating
        end
        
        return (totalRating.to_f / self.posts.length).round(1)
    end

end
