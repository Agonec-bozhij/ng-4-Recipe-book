import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe1', 'This is simply a test1', 'http://www.ipa.co.uk/write/imageportfolio/recipe_logo.jpg'),
        new Recipe('A Test Recipe2', 'This is simply a test2', 'http://www.ipa.co.uk/write/imageportfolio/recipe_logo.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}