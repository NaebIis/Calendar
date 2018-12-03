class CategoryItemJoinsController < ApplicationController
  # before_action :set_category_item_join, only: [:show, :update, :destroy]
  wrap_parameters false

  # GET /category_item_joins
  def index
    @category_item_joins = CategoryItemJoin.all

    render json: @category_item_joins
  end

  # GET /category_item_joins/1
  def show
    render json: @category_item_join
  end

  # POST /category_item_joins
  def create
    @category_item_join = CategoryItemJoin.create(
      item_id: params[:item_id],
      category_id: params[:category_id]
    )

    if @category_item_join.save
      render json: @category_item_join, status: :created, location: @category_item_join
    else
      render json: @category_item_join.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /category_item_joins/1
  def update
    @category_item_join = CategoryItemJoin.find(params[:id]) 
    if @category_item_join.update(item_id: params[:item_id])
      render json: @category_item_join
    else
      render json: @category_item_join.errors, status: :unprocessable_entity
    end
  end

  # DELETE /category_item_joins/1
  def destroy
    @category_item_join = CategoryItemJoin.find(params[:id]) 

    @category_item_join.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_category_item_join
      @category_item_join = CategoryItemJoin.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def category_item_join_params
      params.require(:category_item_join).permit(:item_id, :category_id)
    end
end
