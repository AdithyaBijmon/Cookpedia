import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  http = inject(HttpClient)
  serverUrl = "http://localhost:3000"

  //  getAllRecipes
  getAllRecipesAPI() {
    return this.http.get(`${this.serverUrl}/all-recipes`)
  }

  // register API
  registerAPI(reqBody: any) {
    return this.http.post(`${this.serverUrl}/register`, reqBody)
  }

  loginAPI(reqBody: any) {
    return this.http.post(`${this.serverUrl}/login`, reqBody)
  }

  // append token :return token append req header
  appendToken() {
    const token = sessionStorage.getItem("token")
    let headers = new HttpHeaders
    if (token) {
      headers = headers.append("Authorization", `Bearer ${token}`)
    }
    return { headers }
  }

  viewRecipeAPI(recipeId: String) {
    return this.http.get(`${this.serverUrl}/view/${recipeId}/recipe`, this.appendToken())
  }

  viewRelatedRecipeAPI(cuisine: String) {
    return this.http.get(`${this.serverUrl}/related-recipes?cuisine=${cuisine}`, this.appendToken())
  }

  addToDownloadAPI(recipe: any) {
    return this.http.put(`${this.serverUrl}/recipes/${recipe._id}/download`,recipe,this.appendToken())

  }
}
