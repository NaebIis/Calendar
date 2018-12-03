require 'test_helper'

class InventoryItemCategoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @inventory_item_category = inventory_item_categories(:one)
  end

  test "should get index" do
    get inventory_item_categories_url, as: :json
    assert_response :success
  end

  test "should create inventory_item_category" do
    assert_difference('InventoryItemCategory.count') do
      post inventory_item_categories_url, params: { inventory_item_category: { name: @inventory_item_category.name } }, as: :json
    end

    assert_response 201
  end

  test "should show inventory_item_category" do
    get inventory_item_category_url(@inventory_item_category), as: :json
    assert_response :success
  end

  test "should update inventory_item_category" do
    patch inventory_item_category_url(@inventory_item_category), params: { inventory_item_category: { name: @inventory_item_category.name } }, as: :json
    assert_response 200
  end

  test "should destroy inventory_item_category" do
    assert_difference('InventoryItemCategory.count', -1) do
      delete inventory_item_category_url(@inventory_item_category), as: :json
    end

    assert_response 204
  end
end
