import { Component, OnDestroy, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoplistService } from '../shoplist.service';

@Component({

    selector: 'app-shopedit',
    templateUrl: './shopedit.component.html',
    styleUrls: ['./shopedit.component.css']
})

export class ShopeditComponent implements OnInit, OnDestroy {

    signupForm: FormGroup;
    subscription: Subscription;
    editMode = false;
    editItemIndex: number;
    editItem: Ingredient;

    constructor (private shoplistService: ShoplistService) {  // we will listen to index from item edit

    }

    ngOnInit() {
        this.signupForm = new FormGroup({
            'name' : new FormControl(null, Validators.required),
            'amount' : new FormControl(null, [Validators.required, this.isAmountValid])
        })

        this.subscription = this.shoplistService.startedEditing.subscribe((index: number) => {
            this.editMode = true;
            this.editItemIndex = index;
            this.editItem = this.shoplistService.getIngredient(index);

            this.signupForm.setValue({
                'name' : this.editItem.name,
                'amount' : this.editItem.amount
            })

            
        })

    }

    onAddItem() {

        if (!this.editMode) {
            this.shoplistService.
            addingItem(new Ingredient(this.signupForm.get('name').value, this.signupForm.get('amount').value));
        } else {
            this.shoplistService.
            updateItem(
                this.editItemIndex, 
                new Ingredient(this.signupForm.get('name').value, this.signupForm.get('amount').value));
            
        }
        this.editMode = false;
        this.signupForm.reset();

        console.log(this.signupForm);
    }

    isAmountValid(control: FormControl) : {[s : string] : boolean} {
        if (control.value < 1) {
            return {amountInvalid : true};
        }

        return null;
    }

    onClear() {
        this.signupForm.reset()
        this.shoplistService.clearAllItems();
        this.editMode = false;
    }

    onDelete() {    
        this.shoplistService.deleteIngredient(this.editItemIndex);
        this.signupForm.reset();
        this.editMode = false;
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}