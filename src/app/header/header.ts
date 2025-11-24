import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isLoggedin:boolean = false
  loginUsername:String = ""
  router = inject(Router)

  ngOnInit(){
    if(sessionStorage.getItem("token") && sessionStorage.getItem("user")){
      this.isLoggedin = true
      this.loginUsername = JSON.parse(sessionStorage.getItem("user") || "")?.username?.split(" ")[0]
    }
  }

  logout(){
    sessionStorage.clear()
    this.isLoggedin = false
    this.loginUsername = ""
    this.router.navigateByUrl('/')
  }
}
