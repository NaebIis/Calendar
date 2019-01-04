class ContactSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :phone, :email
end
