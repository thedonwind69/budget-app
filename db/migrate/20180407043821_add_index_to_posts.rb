class AddIndexToPosts < ActiveRecord::Migration[5.1]
  def change

    add_index :posts, [:user_id, :city_id, :category_id], :unique => true

  end
end
