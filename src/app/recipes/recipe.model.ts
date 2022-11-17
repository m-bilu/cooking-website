// NEW TYPE OF FILE - MODEL
// DEFINING normal recipe class to use in angular components stuff

import { Ingredient } from "../shared/ingredient.model";



export class Recipe {
    public name: string;
    public desc: string;
    public imagepath: string;
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, imagepath: string, ingredients: Ingredient[]) {
        this.name = name;
        this.desc = desc;
        this.imagepath = imagepath;
        this.ingredients = ingredients;
    }

}