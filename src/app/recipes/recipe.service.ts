import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes : Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'This is a test Recipe',
      'https://i0.wp.com/thespinningspoon.com/wp-content/uploads/2021/05/potato-chip-chicken-schnitzel.jpg?fit=1200%2C800&ssl=1',
      [
        new Ingredient('Meat',1),
        new Ingredient('French Fries', 20)
      ]
      ),
    new Recipe(
      'Big Fat Burger',
      'This is a test Recipe',
      'https://rs-menus-api.roocdn.com/images/8ed4077e-63ef-4455-98c5-2529ffcbb951/image.jpeg?width=1200&height=630&auto=webp&format=jpg&fit=crop',
      [
        new Ingredient('Buns',2),
        new Ingredient('Meat',1)
      ]
      )

  ]

  constructor(private slServive: ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slServive.addIngredients(ingredients)
  }

}
