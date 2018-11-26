class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name
      t.string :time
      t.string :address
      t.string :date
      t.text :notes

      t.timestamps
    end
  end
end
