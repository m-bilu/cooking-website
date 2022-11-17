import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        console.log("current editMode is: " + this.editMode);
        this.initForm();
      }
    )
  }

  private initForm() {

    let recipeName = '';
    let imageURL = '';
    let recipeDesc = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      imageURL = recipe.imagepath;
      recipeDesc = recipe.desc;

      if (recipe.ingredients) {  //
        for (let i of recipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            'name' : new FormControl(i.name, Validators.required),
            'amount' : new FormControl(i.amount, [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)])
          }))
        }
      }

    }

    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName, Validators.required),
      'imageURL' : new  FormControl(imageURL, Validators.required),
      'desc' : new FormControl(recipeDesc, Validators.required),
      'ingredients' : recipeIngredients

    })
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredients() {
    (<FormArray>this.recipeForm.get('ingredients')).push(  // Between 1st parenthases is treated like FormArray
      new FormGroup({
        'name' : new FormControl(null, Validators.required),
        'amount' : new FormControl(null, [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)])
      })
    )  
  }

  onSubmit() {
    console.log(this.recipeForm)
  }

  

}
 