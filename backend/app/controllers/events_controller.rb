class EventsController < ApplicationController
  # before_action :set_event, only: [:show, :update, :destroy]
  wrap_parameters false

  # GET /events
  def index
    @events = Event.all
    render json: @events
  end

  # GET /events/1
  def show
    render json: @event
  end

  # POST /events
  def create
    @event = Event.create(
      name: params[:name],
      date: params[:date],
        time: params[:time],
        address: params[:address],
      )
      render json: @event
  end

  # PATCH/PUT /events/1
  def update
    if @event.update(event_params)
      render json: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /events/1
  def destroy
    @event.destroy
  end

  private

  def event_params
    params.require(:event).permit(:name, :address, :time, :date)
    
  end

  def set_event
    @event = Event.find(params[:id])
  end

    
end
