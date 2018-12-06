require 'test_helper'

class PartyEventItemJoinsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @party_event_item_join = party_event_item_joins(:one)
  end

  test "should get index" do
    get party_event_item_joins_url, as: :json
    assert_response :success
  end

  test "should create party_event_item_join" do
    assert_difference('PartyEventItemJoin.count') do
      post party_event_item_joins_url, params: { party_event_item_join: { item_id: @party_event_item_join.item_id, partyEvent_id: @party_event_item_join.partyEvent_id } }, as: :json
    end

    assert_response 201
  end

  test "should show party_event_item_join" do
    get party_event_item_join_url(@party_event_item_join), as: :json
    assert_response :success
  end

  test "should update party_event_item_join" do
    patch party_event_item_join_url(@party_event_item_join), params: { party_event_item_join: { item_id: @party_event_item_join.item_id, partyEvent_id: @party_event_item_join.partyEvent_id } }, as: :json
    assert_response 200
  end

  test "should destroy party_event_item_join" do
    assert_difference('PartyEventItemJoin.count', -1) do
      delete party_event_item_join_url(@party_event_item_join), as: :json
    end

    assert_response 204
  end
end
