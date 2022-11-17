import { EventEmitter, Inject, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoplistService } from "../shoplist/shoplist.service";
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService {

    constructor(private shoplistService: ShoplistService) {}

    private recipes: Recipe[] = [ // Cannot access from anywhere


        new Recipe('Qorma', 'This hopefully works', '../../assets/testfoodimage.jpg',
        [
            new Ingredient('beef', 2), new Ingredient('bread', 1)
        ]),
        new Recipe('Biryani', 'Hopefully this works too!', '../../assets/Biryani_of_Lahore.jpg',
        [
            new Ingredient('chicken', 3), new Ingredient('rice', 2)
        ])
    
      ];  // Recipe here is self-defined classes from recipe.module.ts
          // Since they are in the service, they can be accessed from anywhere

      

    getRecipes() {
        return this.recipes.slice(); // does not return reference, returns copy of our array like cpp
    }

    getRecipe(index: number) {
        return this.recipes[index]; // does not return reference, returns copy of our array like cpp
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
    }
    
      updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
    }

}