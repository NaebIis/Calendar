class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :time, :address, :date, :notes
end
