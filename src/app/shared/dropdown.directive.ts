import { Directive, ElementRef, HostBinding, HostListener, TemplateRef } from "@angular/core";

@Directive({

    selector: '[appDropdown]'
})

export class DropdownDirective {

    @HostBinding('class.open') clickToggle: boolean = false; // Here, we are hostbinding this property to the host element

    // class is array of all classes on host element

    // HostBinding: If property changes, bind causes () property to change as well
        // In this case, true/false causes addition/removal of open class from array of classes

    // Goal: On click; want to add CSS class to element on which directive sits.
    // On second click; remove CSS class

    @HostListener('document:click', ['$event']) appDropdown(event: Event) { // WHAT DO PARAMS MEAN AA

        console.log(this.clickToggle);
        
        if (this.clickToggle) {
            this.clickToggle = false;
        } else if (this.elRef.nativeElement.contains(event.target)) {
            this.clickToggle = true;
        }

    }

    constructor (private elRef: ElementRef) { // elRef contains reference to the element on which event trigger occured

    }



}