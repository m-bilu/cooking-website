import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoplistService {

    ingredientsChanged = new Subject<Ingredient[]>;

    startedEditing = new Subject<number>();


    private ingredients: Ingredient[] = [

        new Ingredient('tomatoes', 10),
        new Ingredient('onions', 2)
    
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index : number) {
        return this.ingredients[index];
    }

    addingItem(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    removeFirstItem() {
        this.ingredients.shift();
    }

    clearAllItems() {
        this.ingredients = [];
        this.ingredientsChanged.next(this.ingredients.slice());
        console.log(this.ingredients)
    }

    updateItem(index: number, ingredient: Ingredient) {
        this.ingredients[index] = ingredient; // memory auto maintenance?
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    

}