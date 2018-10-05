class Api::BudgetsController < ApplicationController

    def index
        @user = User.find(params[:user_id])
        @all_budgets = @user.budgets
        render :index
    end

    def create
      @post = Post.create(post_params)
      @post_user
      if @post.save
        render :show
      else
        render json: @post.errors, status: :unprocessable_entity
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

    def post_params
      params.require(:budget).permit(
        :month,
        :year,
        :user_id,
      )
    end

end
