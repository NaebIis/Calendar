class CreatePartyEventItemJoins < ActiveRecord::Migration[5.2]
  def change
    create_table :party_event_item_joins do |t|
      t.integer :partyEvent_id
      t.integer :item_id

      t.timestamps
    end
  end
end
