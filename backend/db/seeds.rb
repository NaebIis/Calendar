# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Event.destroy_all
ClickedDayNote.destroy_all
InventoryItem.destroy_all
CategoryItemJoin.destroy_all
InventoryItemCategory.destroy_all
PartyEvent.destroy_all
PartyEventItemJoin.destroy_all

one = Event.create(name: "Pick flowers", time: "13:30 AM", address: "1910 Winter st", date: "Sun Dec 23 2018 00:00:00 GMT-0600 (Central Standard Time)", notes: "red, blue, green")
two = Event.create(name: "cooking", time: "11:30 AM", address: "1910 Winter st", date: "Wed Dec 19 2018 00:00:00 GMT-0600 (Central Standard Time)", notes: "gumbo")
three = Event.create(name: "setting up", time: "12:30 AM", address: "1910 Winter st", date: "Thu Dec 20 2018 00:00:00 GMT-0600 (Central Standard Time)", notes: "wedding")
Event.create(name: "walking the dog", time: "1:30 AM", address: "1910 Winter st", date: "Fri Dec 21 2018 00:00:00 GMT-0600 (Central Standard Time)", notes: "6th st")
Event.create(name: "reading", time: "12:30 AM", address: "1910 Winter st", date: "Sat Dec 22 2018 00:00:00 GMT-0600 (Central Standard Time)", notes: "A good book")

ClickedDayNote.create(day: one.date, notes: "Working")
ClickedDayNote.create(day: two.date, notes: "29th")
ClickedDayNote.create(day: three.date, notes: "30th")

computer = InventoryItem.create(name: "DeskTop Computer")
InventoryItem.create(name: "Desk")
InventoryItem.create(name: "Table")
InventoryItem.create(name: "Vasse")
tv = InventoryItem.create(name: "TV")
InventoryItem.create(name: "Veggie tray")
InventoryItem.create(name: "Donuts")
InventoryItem.create(name: "Flowers")


el = InventoryItemCategory.create(name: "Electronics")
InventoryItemCategory.create(name: "thing1")
InventoryItemCategory.create(name: "thing2")
InventoryItemCategory.create(name: "thing3")
InventoryItemCategory.create(name: "thing4")


CategoryItemJoin.create(item_id: computer.id, category_id: el.id)
CategoryItemJoin.create(item_id: tv.id, category_id: el.id)
CategoryItemJoin.create(item_id: 1, category_id: 1)
CategoryItemJoin.create(item_id: 1, category_id: 1)

partyEvent1 = PartyEvent.create(name: "Wedding", location: "WeWork Wedding Park")
partyEvent2 = PartyEvent.create(name: "Wedding1", location: "WeWork Wedding Park")
partyEvent3 = PartyEvent.create(name: "Wedding2", location: "WeWork Wedding Park")
partyEvent4 = PartyEvent.create(name: "Wedding3", location: "WeWork Wedding Park")
partyEvent5 = PartyEvent.create(name: "Wedding4", location: "WeWork Wedding Park")
partyEvent6 = PartyEvent.create(name: "Wedding5", location: "WeWork Wedding Park")

PartyEventItemJoin.create(item_id: computer.id, partyEvent_id: partyEvent1.id)
PartyEventItemJoin.create(item_id: tv.id, partyEvent_id: partyEvent1.id)
PartyEventItemJoin.create(item_id: computer.id, partyEvent_id: partyEvent3.id)
PartyEventItemJoin.create(item_id: computer.id, partyEvent_id: partyEvent5.id)

