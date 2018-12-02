require 'test_helper'

class InventoryItemCategotiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @inventory_item_categoty = inventory_item_categoties(:one)
  end

  test "should get index" do
    get inventory_item_categoties_url, as: :json
    assert_response :success
  end

  test "should create inventory_item_categoty" do
    assert_difference('InventoryItemCategoty.count') do
      post inventory_item_categoties_url, params: { inventory_item_categoty: { name: @inventory_item_categoty.name } }, as: :json
    end

    assert_response 201
  end

  test "should show inventory_item_categoty" do
    get inventory_item_categoty_url(@inventory_item_categoty), as: :json
    assert_response :success
  end

  test "should update inventory_item_categoty" do
    patch inventory_item_categoty_url(@inventory_item_categoty), params: { inventory_item_categoty: { name: @inventory_item_categoty.name } }, as: :json
    assert_response 200
  end

  test "should destroy inventory_item_categoty" do
    assert_difference('InventoryItemCategoty.count', -1) do
      delete inventory_item_categoty_url(@inventory_item_categoty), as: :json
    end

    assert_response 204
  end
end
