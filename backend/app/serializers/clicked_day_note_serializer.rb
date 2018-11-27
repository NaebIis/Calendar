class ClickedDayNoteSerializer < ActiveModel::Serializer
  attributes :id, :day, :notes
end
