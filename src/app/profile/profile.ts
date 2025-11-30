import { Component, inject } from '@angular/core';
import { ApiService } from '../services/api-service';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [Header,Footer,FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  username: String = ""
  password: String = ""
  confirmPassword: string = ""
  downloadList: any = []
  profile: any = []
  api = inject(ApiService)

  constructor() {
    if (sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user") || "")
      this.username = user.username
      
      // pofile:String = user.profile

    }
  }

  ngOnInit() {
    this.getDownloadList()
  }

  getDownloadList() {
    this.api.getUserRecipeDownloadListAPI().subscribe((res: any) => {
      this.downloadList = res
    })
  }

  getFile(event: any) {
    let uploadFile = event?.target.files[0]

    let fr = new FileReader()
    fr.readAsDataURL(uploadFile)
    fr.onload = (event: any) => {
      // this.profile.set(event.target.result)
    }
  }

  editProfile() {
    if (this.username) {
      if (this.password != this.confirmPassword) {
        this.api.updateUserAPI({username:this.username,password:this.password})
          

      }
      else {

      }

    }
  }

}
