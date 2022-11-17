import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService] // All recipe child components now have this recipe service
                              // will need constructor for access everywhere
})
export class RecipesComponent {
  

}
