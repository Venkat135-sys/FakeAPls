import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { Recipe } from '../models/recipe.model';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {

 @Input() recipeobj:Recipe

}
