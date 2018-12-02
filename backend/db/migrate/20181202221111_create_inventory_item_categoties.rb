class CreateInventoryItemCategoties < ActiveRecord::Migration[5.2]
  def change
    create_table :inventory_item_categoties do |t|
      t.string :name

      t.timestamps
    end
  end
end
