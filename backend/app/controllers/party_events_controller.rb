class PartyEventsController < ApplicationController
  # before_action :set_party_event, only: [:show, :update, :destroy]
  wrap_parameters false


  # GET /party_events
  def index
    @party_events = PartyEvent.all

    render json: @party_events
  end

  # GET /party_events/1
  def show
    render json: @party_event
  end

  # POST /party_events
  def create
    @party_event = PartyEvent.create(name: params[:name], location: params[:location], time: params[:time])

    render json: @party_event
  end

  # PATCH/PUT /party_events/1
  def update
    if @party_event.update(party_event_params)
      render json: @party_event
    else
      render json: @party_event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /party_events/1
  def destroy
    @party_event.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_party_event
      @party_event = PartyEvent.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def party_event_params
      params.require(:party_event).permit(:name, :location, :time)
    end
end
