class ClickedDayNotesController < ApplicationController
  # before_action :set_clicked_day_note, only: [:show, :update, :destroy]
  wrap_parameters false

  # GET /clicked_day_notes
  def index
    @clicked_day_notes = ClickedDayNote.all

    render json: @clicked_day_notes
  end

  # GET /clicked_day_notes/1
  def show
    render json: @clicked_day_note
  end

  # POST /clicked_day_notes
  def create
    @clicked_day_note = ClickedDayNote.create(
      day: params[:day],
      notes: params[:notes]
      )

    if @clicked_day_note.save
      render json: @clicked_day_note, status: :created, location: @clicked_day_note
    else
      render json: @clicked_day_note.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /clicked_day_notes/1
  def update
    @clicked_day_note = ClickedDayNote.find(params[:id]) 


    if @clicked_day_note.update(notes: params[:notes])
      render json: @clicked_day_note
    else
      render json: @clicked_day_note.errors, status: :unprocessable_entity
    end
  end

  # DELETE /clicked_day_notes/1
  def destroy
    @clicked_day_note = ClickedDayNote.find(params[:id]) 
    
    @clicked_day_note.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_clicked_day_note
      @clicked_day_note = ClickedDayNote.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def clicked_day_note_params
      params.require(:clicked_day_note).permit(:day, :notes)
    end
end
