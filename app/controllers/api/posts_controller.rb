class Api::PostsController < ApplicationController

    def index
        @city = City.find(params[:city_id])
        @all_posts = @city.posts
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
      params.require(:post).permit(
        :subject,
        :content,
        :rating,
        :user_id,
        :city_id,
        :category_id,
      )
    end
    
end




# cities/posts_controller
# class Cities::PostsController