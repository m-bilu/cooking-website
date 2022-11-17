import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({  //@injector not needed for service, since @component includes appropriate metadata
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

  recipes: Recipe[];


  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes=this.recipeService.getRecipes();
    
  }

  

}
