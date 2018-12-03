class InventoryItemCategoriesController < ApplicationController
  # before_action :set_inventory_item_category, only: [:show, :update, :destroy]
  wrap_parameters false


  # GET /inventory_item_categories
  def index
    @inventory_item_categories = InventoryItemCategory.all

    render json: @inventory_item_categories
  end

  # GET /inventory_item_categories/1
  def show
    render json: @inventory_item_category
  end

  # POST /inventory_item_categories
  def create
    @inventory_item_category = InventoryItemCategory.create(
      name: params[:name]
    )

    if @inventory_item_category.save
      render json: @inventory_item_category, status: :created, location: @inventory_item_category
    else
      render json: @inventory_item_category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /inventory_item_categories/1
  def update
    @inventory_item_category = InventoryItemCategory.find(params[:id])
    if @inventory_item_category.update(name: params[:name])
      render json: @inventory_item_category
    else
      render json: @inventory_item_category.errors, status: :unprocessable_entity
    end
  end

  # DELETE /inventory_item_categories/1
  def destroy
    @inventory_item_category = InventoryItemCategory.find(params[:id])

    @inventory_item_category.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_inventory_item_category
      @inventory_item_category = InventoryItemCategory.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def inventory_item_category_params
      params.require(:inventory_item_category).permit(:name)
    end
end
