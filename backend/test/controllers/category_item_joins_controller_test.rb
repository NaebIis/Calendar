require 'test_helper'

class CategoryItemJoinsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @category_item_join = category_item_joins(:one)
  end

  test "should get index" do
    get category_item_joins_url, as: :json
    assert_response :success
  end

  test "should create category_item_join" do
    assert_difference('CategoryItemJoin.count') do
      post category_item_joins_url, params: { category_item_join: { category_id: @category_item_join.category_id, item_id: @category_item_join.item_id } }, as: :json
    end

    assert_response 201
  end

  test "should show category_item_join" do
    get category_item_join_url(@category_item_join), as: :json
    assert_response :success
  end

  test "should update category_item_join" do
    patch category_item_join_url(@category_item_join), params: { category_item_join: { category_id: @category_item_join.category_id, item_id: @category_item_join.item_id } }, as: :json
    assert_response 200
  end

  test "should destroy category_item_join" do
    assert_difference('CategoryItemJoin.count', -1) do
      delete category_item_join_url(@category_item_join), as: :json
    end

    assert_response 204
  end
end
