class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :subject, null: false
      t.text :content, null: false
      t.integer :rating, null: false
      t.references :user, null: false
      t.references :city, null: false
      t.references :category, null: false
      t.timestamps
    end

  end
end
