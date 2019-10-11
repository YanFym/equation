class Api::EquationsController < ApplicationController
  respond_to :json

  def index
    respond_with Equation.order('created_at DESC')
  end

  def show
    respond_with Equation.find(params[:id])
  end

  def create
    respond_with :api, Equation.create(equation_params).fetch_solution
  end

  def destroy
    respond_with Equation.destroy(params[:id])
  end

  def update
    equation = Equation.find(params['id'])
    equation.update(equation_params)
    respond_with Equation, json: equation
  end

  private

  def equation_params
    params.require(:equation).permit(
      :id,
      :senior_cofficient,
      :avarage_cofficent,
      :free_cofficent,
      :discriminant,
      :first_root,
      :second_root
    )
  end
end