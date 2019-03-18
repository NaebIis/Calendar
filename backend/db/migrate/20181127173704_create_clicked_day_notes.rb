class CreateClickedDayNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :clicked_day_notes do |t|
      t.string :day
      t.string :notes, default: "empty"

      t.timestamps
    end
  end
end
