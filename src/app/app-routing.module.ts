import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipedetailComponent } from './recipes/recipedetail/recipedetail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShopeditComponent } from './shoplist/shopedit/shopedit.component';
import { ShoplistComponent } from './shoplist/shoplist.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent }, // This needs to be first, so ID does not get read as new
    { path: ':id', component: RecipedetailComponent },
    { path: ':id/edit', component: RecipeEditComponent }
  ]},
  { path: 'shoplist', component: ShoplistComponent, children: [
    { path: 'shopedit', component: ShopeditComponent }
  ]},
  { path: 'not-found', component: NotFoundComponent},
  //{ path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
