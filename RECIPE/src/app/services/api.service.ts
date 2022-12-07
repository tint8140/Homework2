import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private randomURL: string = 'www.themealdb.com/api/json/v1/1/random.php';
  private letterURL: string = 'www.themealdb.com/api/json/v1/1/search.php?f=';
  private nameURL: string = 'www.themealdb.com/api/json/v1/1/search.php?s=';
  public recipes: any;
  constructor(private http: HttpClient) {}
  getRandomRecipe(): Observable<any> {
    return this.http.get(this.randomURL);
  }
  getRecipeByLetter(letter: string): Observable<any> {
    return this.http.get(this.letterURL + letter);
  }
  getRecipeByName(name: string): Observable<any> {
    return this.http.get(this.nameURL + name);
  }
  getRecipeById(recipeID: string) {
    return this.recipes[recipeID];
  }
}
