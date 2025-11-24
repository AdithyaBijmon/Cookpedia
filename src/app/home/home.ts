import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { ApiService } from '../services/api-service';

@Component({
  selector: 'app-home',
  imports: [Header,Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  allRecipes:any = []

  api = inject(ApiService)

  ngOnInit(){
    this.getAllRecipes()
  }

  getAllRecipes(){
    this.api.getAllRecipesAPI().subscribe((res:any)=>{
      this.allRecipes = res.slice(0,6)
      console.log(this.allRecipes)
    })
  }
}
