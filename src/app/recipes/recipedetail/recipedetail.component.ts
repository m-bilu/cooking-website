import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ShoplistService } from 'src/app/shoplist/shoplist.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {

  currentRecipe: Recipe; 
  
  // currentRecipe does not need to be initialized, since in recipe component, app-recipedetail is
  // only included in template when we have a recipe to show -> will only be rendered when
  // we have smth to initiate currentRecipe with. If we have not yet selected a recipe to display
  // on the site, currentRecipe will be unintialized BUT no instance of this component would exist 
  // DUE TO ngIf statement.

  recipeDetails = {'Biryani' : 'This is ALSO a great dish!',
                   'Qorma' : 'This is a great dish'};
  id: number;

  constructor(
    private shoplistService: ShoplistService,
    private route: ActivatedRoute,
    private recipeService: RecipeService) { }

  ngOnInit(): void {
    
     // DONT FORGET TO SUBSRIBE TO SEE CHANGES ON SITE
    this.route.params.subscribe(  // subscribe is on params, not on snapshot.params !!
      (params: Params) => {
        this.id = +params['id'];
        this.currentRecipe = this.recipeService.getRecipes()[this.id];  
        // REMEMBER to unsubscribe when working with ur own observables
      }
    )
  }

  sendToList(recipe: Recipe) {

    for (let item of recipe.ingredients) {
      this.shoplistService.addingItem(item);
    }
  }

}
