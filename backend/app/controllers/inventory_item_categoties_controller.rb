class InventoryItemCategotiesController < ApplicationController
  before_action :set_inventory_item_categoty, only: [:show, :update, :destroy]

  # GET /inventory_item_categoties
  def index
    @inventory_item_categoties = InventoryItemCategoty.all

    render json: @inventory_item_categoties
  end

  # GET /inventory_item_categoties/1
  def show
    render json: @inventory_item_categoty
  end

  # POST /inventory_item_categoties
  def create
    @inventory_item_categoty = InventoryItemCategoty.new(inventory_item_categoty_params)

    if @inventory_item_categoty.save
      render json: @inventory_item_categoty, status: :created, location: @inventory_item_categoty
    else
      render json: @inventory_item_categoty.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /inventory_item_categoties/1
  def update
    if @inventory_item_categoty.update(inventory_item_categoty_params)
      render json: @inventory_item_categoty
    else
      render json: @inventory_item_categoty.errors, status: :unprocessable_entity
    end
  end

  # DELETE /inventory_item_categoties/1
  def destroy
    @inventory_item_categoty.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_inventory_item_categoty
      @inventory_item_categoty = InventoryItemCategoty.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def inventory_item_categoty_params
      params.require(:inventory_item_categoty).permit(:name)
    end
end
