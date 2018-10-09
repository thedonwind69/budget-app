class Api::BudgetsController < ApplicationController

    def index
        @user = User.find(params[:user_id])
        @all_budgets = @user.budgets
        render :index
    end

    def create
      @user = User.find(params[:user_id])
      @budget = user.budgets.create(budget_params)
      if @budget.save
        render :show
      else
        render json: @budget.errors, status: :unprocessable_entity
      end
    end

    def update
      @post = Post.find(params[:id])
      @post.update_attributes(post_params)
      render :show
    end

    def destroy
      @post = Post.find(params[:id])
      @post.destroy
      render :show
    end

    private

    def budget_params
      params.require(:budget).permit(
        :month,
        :year,
        :user_id,
      )
    end

end
