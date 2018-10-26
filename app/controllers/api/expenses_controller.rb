class Api::ExpensesController < ApplicationController

    def index
        @user = User.find(params[:user_id])
        @budget = @user.budgets.find_by(id: params[:budget_id])
        @all_expenses = @budget.expenses
        render :index
    end

    def create
      @user = User.find(params[:user_id])
      @budget = @user.budgets.find_by(id: params[:budget_id])
      @expense = @budget.expenses.create(expense_params)
      if @expense.save
        render :show
      else
        render json: @expense.errors, status: :unprocessable_entity
      end
    end

    # def update
    #   @budget = Budget.find(params[:id])
    #   @budget.update_attributes(budget_params)
    #   render :show
    # end

    # def destroy
    #   @budget = Budget.find(params[:id])
    #   @budget.destroy
    #   render :show
    # end

    
    private

    def expense_params
      params.require(:expense).permit(
        :category,
        :description,
        :date,
        :amount,
        :budget_id,
      )
    end

end
