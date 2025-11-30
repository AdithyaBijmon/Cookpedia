import { Component, inject } from '@angular/core';
import { ApiService } from '../services/api-service';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-saved-recipes',
  imports: [Header,Footer],
  templateUrl: './saved-recipes.html',
  styleUrl: './saved-recipes.css',
})
export class SavedRecipes {
 recipes:any = []
 api = inject(ApiService)

 ngOnInit(){
  this.getAllSavedRecipe()
 }

 getAllSavedRecipe(){
    this.api.getSavedRecipeAPI().subscribe((res:any)=>{
      this.recipes = res
      console.log(this.recipes);
      
    })
 }

 deleteSavedRecipe(id:any){
  this.api.removeSavedRecipeAPI(id).subscribe((res:any)=>{
    this.getAllSavedRecipe()
  })
 }
}
