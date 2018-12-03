class CategoryItemJoinSerializer < ActiveModel::Serializer
  attributes :id, :item_id, :category_id
end
