import { Component, inject } from '@angular/core';
import { ApiService } from '../services/api-service';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [Header, Footer, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  username: String = ""
  password: String = ""
  profile: string = "https://cdn-icons-png.flaticon.com/512/219/219969.png"
  confirmPassword: string = ""
  downloadList: any = []
  userId: String = ""
  router = inject(Router)

  api = inject(ApiService)

  constructor() {
    if (sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user") || "")
      this.username = user.username
      this.userId = user._id
      if (user.profile) {
        this.profile = user.profile

      }

    }
  }

  ngOnInit() {
    this.getDownloadList()
  }

  getDownloadList() {
    this.api.getUserRecipeDownloadListAPI().subscribe((res: any) => {
      this.downloadList = res
      // console.log(this.downloadList);

    })
  }

  getFile(event: any) {
    let uploadFile = event?.target.files[0]

    let fr = new FileReader()
    fr.readAsDataURL(uploadFile)
    fr.onload = (event: any) => {
      this.profile = event.target.result
    }
  }

  editProfile() {
    if (this.username) {
      if (this.password != this.confirmPassword) {
        alert("Password & confirm passoword must be same.")
      }

      else {
        this.api.updateUserAPI({ username: this.username, password: this.password, profile: this.profile, id: this.userId }).subscribe((res: any) => {
          sessionStorage.setItem("user", JSON.stringify(res))
          alert("Profile updated Successfully.")

          if (this.password != "") {
            this.router.navigateByUrl('/login')
          }
        })
      }
    }
    else {
      alert("Please fill the form completely.")
    }
  }

}
