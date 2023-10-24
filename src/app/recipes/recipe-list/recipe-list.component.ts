import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  @Output() recipesWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [];

  constructor() {}

  ngOnInit(): void {
    
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipesWasSelected.emit(recipe);
  }
}
