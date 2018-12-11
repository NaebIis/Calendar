class PartyEventItemJoinsController < ApplicationController
  # before_action :set_party_event_item_join, only: [:show, :update, :destroy]
  wrap_parameters false


  # GET /party_event_item_joins
  def index
    @party_event_item_joins = PartyEventItemJoin.all

    render json: @party_event_item_joins
  end

  # GET /party_event_item_joins/1
  def show
    render json: @party_event_item_join
  end

  # POST /party_event_item_joins
  def create
    @party_event_item_join = PartyEventItemJoin.create(
      item_id: params[:item_id],
      partyEvent_id: params[:partyEvent_id])

    render json: @party_event_item_join
  end

  # PATCH/PUT /party_event_item_joins/1
  def update
    if @party_event_item_join.update(party_event_item_join_params)
      render json: @party_event_item_join
    else
      render json: @party_event_item_join.errors, status: :unprocessable_entity
    end
  end

  # DELETE /party_event_item_joins/1
  def destroy
    @party_event_item_join.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_party_event_item_join
      @party_event_item_join = PartyEventItemJoin.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def party_event_item_join_params
      params.require(:party_event_item_join).permit(:partyEvent_id, :item_id)
    end
end
