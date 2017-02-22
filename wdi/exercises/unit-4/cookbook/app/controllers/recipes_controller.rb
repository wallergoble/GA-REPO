class RecipesController < ApplicationController
    def index
        @greeting = "Hey, friend"
        @recipes = Recipe.all
    end
    def new
        @recipe = Recipe.new
        if @recipe.save
            redirect_to recipes_url
        else
            redirect_to new_recipe_url
        end
    end
    def create
        puts params
    end
    
    private
    def recipe_params
        params.require(:recipe).permit(:title, :description, :made_it_yet)
    end
end