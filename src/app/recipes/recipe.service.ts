import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Сырный суп по‑французски, с курицей',
            'Очень захотелось сварить вкусный куриный супчик на обед. Порекомендую нежный сырный суп с курицей.',
            'http://img1.russianfood.com/dycontent/images_upl/91/big_90812.jpg',
            [
                new Ingredient('Филе куриное', 500),
                new Ingredient('Сыр плавленый', 200),
                new Ingredient('Картофель', 400),
                new Ingredient('Лук репчатый', 150)
            ]
        ),
        new Recipe(
            'Итальянская паста «Карбонара» с беконом и сыром',
            'Подсолить воду, довести до кипения и отварить спагетти почти до готовности, время варки указано на упаковке. Откинуть на дуршлаг и вернуть в сухую кастрюлю. Отдельно измельчить бекон, порубить очищенный репчатый лук и чеснок. Все ингредиенты обжарить на сковороде до золотистого цвета в течение 5 – 6 минут.',
            'http://www.prigotovit.info/uploads/posts/2017-03/1489771152_15italyanskaya-pasta-karbonara-s-bekonom-i-syrom.jpg',
            [
                new Ingredient('Спагетти', 150),
                new Ingredient('Сливки', 150),
                new Ingredient('Бекон', 100),
                new Ingredient('Сыр твердый', 20)
            ]
        ),
    ];

    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}