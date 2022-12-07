import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public recipes: any;
  constructor(private apiService: ApiService) {}
  getRandomRecipe() {
    // console.log('click');
    this.apiService.getRandomRecipe().subscribe((recipes) => {
      this.recipes = recipes['meals'];
      this.apiService.recipes = this.recipes;
    });
  }
  getRecipeByLetter(letter) {
    // console.log('click');
    this.apiService.getRecipeByLetter(letter).subscribe((recipes) => {
      this.recipes = recipes['meals'];
      this.apiService.recipes = this.recipes;
    });
  }
}
