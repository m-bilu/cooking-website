import { Component, OnDestroy, OnInit} from '@angular/core';
import { ShoplistService } from './shoplist.service';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})
export class ShoplistComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[] = [];

  idChangeSub: Subscription;

  constructor(private shoplistService: ShoplistService) {}

  ngOnInit() { // You should do all initializations in ngOnInit
    this.ingredients = this.shoplistService.getIngredients();
    this.idChangeSub = this.shoplistService.ingredientsChanged
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
      // Subscribe method connects event handler, whenever event occurs -> temp function runs.
    );
  }

  ngOnDestroy() {
    this.idChangeSub.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoplistService.startedEditing.next(index); // passing index to subject, to listen elsewhere
  }

}
