import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { ApiService } from '../services/api-service';
import { Router } from '@angular/router';
import { SearchPipe } from '../pipes/search-pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-recipes',
  imports: [Header,Footer,SearchPipe,FormsModule,NgxPaginationModule],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class Recipes {
  p:number = 1
  allRecipes:any = []
  dummyAllRecipes:any = []
  cuisineArray:any = []
  mealTypeArray:any = []
  searchKey:string=""
  router=inject(Router)

  api = inject(ApiService)

  ngOnInit(){
    this.getAllRecipes()
  }

  getAllRecipes(){
    this.api.getAllRecipesAPI().subscribe({
      next:(res:any)=>{
        this.allRecipes = res
        this.dummyAllRecipes = res
        this.allRecipes.forEach((item:any)=>{
          !this.cuisineArray.includes(item.cuisine) && this.cuisineArray.push(item.cuisine)
        })
        // console.log(this.cuisineArray);
        const dummyMealArray = this.allRecipes.map((item:any)=>item.mealType).flat(Infinity)
        dummyMealArray.forEach((item:any)=>{
          !this.mealTypeArray.includes(item) && this.mealTypeArray.push(item)
        })
        // console.log(this.MealTypeArray);
      
      }
    })
  }

  // filter recipes
  filterRecipe(key:string,value:string){
    this.allRecipes = this.dummyAllRecipes.filter((item:any)=>{
      item[key]==value
    })
  }

  // navigate view

  navigateView(recipeId:String){
    if(sessionStorage.getItem("token")){
      this.router.navigateByUrl(`/view/${recipeId}/recipe`)
    }
    else{
      alert("Please Login to get full access to our Recipes.")
    }
  }

}
