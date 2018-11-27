require 'test_helper'

class ClickedDayNotesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @clicked_day_note = clicked_day_notes(:one)
  end

  test "should get index" do
    get clicked_day_notes_url, as: :json
    assert_response :success
  end

  test "should create clicked_day_note" do
    assert_difference('ClickedDayNote.count') do
      post clicked_day_notes_url, params: { clicked_day_note: { day: @clicked_day_note.day } }, as: :json
    end

    assert_response 201
  end

  test "should show clicked_day_note" do
    get clicked_day_note_url(@clicked_day_note), as: :json
    assert_response :success
  end

  test "should update clicked_day_note" do
    patch clicked_day_note_url(@clicked_day_note), params: { clicked_day_note: { day: @clicked_day_note.day } }, as: :json
    assert_response 200
  end

  test "should destroy clicked_day_note" do
    assert_difference('ClickedDayNote.count', -1) do
      delete clicked_day_note_url(@clicked_day_note), as: :json
    end

    assert_response 204
  end
end
