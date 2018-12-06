class CreatePartyEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :party_events do |t|
      t.string :name
      t.string :location
      t.string :time

      t.timestamps
    end
  end
end
