import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoplistComponent } from './shoplist/shoplist.component';
import { RecipelistComponent } from './recipes/recipelist/recipelist.component';
import { RecipeitemComponent } from './recipes/recipelist/recipeitem/recipeitem.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShopeditComponent } from './shoplist/shopedit/shopedit.component';
import { RecipedetailComponent } from './recipes/recipedetail/recipedetail.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoplistService } from './shoplist/shoplist.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipeService } from './recipes/recipe.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShoplistComponent,
    RecipelistComponent,
    HeaderComponent,
    RecipesComponent,
    ShopeditComponent,
    RecipedetailComponent,
    RecipeitemComponent,
    DropdownDirective,
    NotFoundComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ShoplistService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
