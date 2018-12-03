class CreateCategoryItemJoins < ActiveRecord::Migration[5.2]
  def change
    create_table :category_item_joins do |t|
      t.integer :item_id
      t.integer :category_id

      t.timestamps
    end
  end
end
