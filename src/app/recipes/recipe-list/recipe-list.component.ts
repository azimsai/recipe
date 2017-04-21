import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Neyyappam', 'This is as good as nougat', 'http://img.manoramaonline.com/content/dam/mm/en/food/kerala-kitchen/Images/neyyappam.jpg.image.784.410.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
