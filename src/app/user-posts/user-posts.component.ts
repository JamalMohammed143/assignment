import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from "../http-service.service";
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  particularUserDataObj: any = {};
  partiUserPostsList: any = [];
  constructor(private http: HttpServiceService, public app: AppComponent) { }

  ngOnInit(): void {
    var sessData = JSON.parse(sessionStorage.getItem("partiUserData"));
    if (sessData) {
      this.particularUserDataObj = sessData;
    } else {
      this.particularUserDataObj = {};
    }
    console.log("this.particularUserDataObj", this.particularUserDataObj);
    this.getPartiUserPosts();
  }

  getPartiUserPosts() {
    this.http.get_parti_user_posts().subscribe((response: any) => {
      console.log("response", response);
      this.partiUserPostsList = [];
      response.forEach(obj => {
        if (obj.userId == this.particularUserDataObj.id) {
          this.partiUserPostsList.push(obj);
        }
      });
      console.log("this.partiUserPostsList", this.partiUserPostsList);
    }, error => {
      this.app.errorHandler(error);
    });
  }
}
