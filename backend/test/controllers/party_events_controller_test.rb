require 'test_helper'

class PartyEventsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @party_event = party_events(:one)
  end

  test "should get index" do
    get party_events_url, as: :json
    assert_response :success
  end

  test "should create party_event" do
    assert_difference('PartyEvent.count') do
      post party_events_url, params: { party_event: { location: @party_event.location, name: @party_event.name, time: @party_event.time } }, as: :json
    end

    assert_response 201
  end

  test "should show party_event" do
    get party_event_url(@party_event), as: :json
    assert_response :success
  end

  test "should update party_event" do
    patch party_event_url(@party_event), params: { party_event: { location: @party_event.location, name: @party_event.name, time: @party_event.time } }, as: :json
    assert_response 200
  end

  test "should destroy party_event" do
    assert_difference('PartyEvent.count', -1) do
      delete party_event_url(@party_event), as: :json
    end

    assert_response 204
  end
end
