import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from "../http-service.service";
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  allUsersDataList: any = [];
  userFilter: any = { name: "" };
  constructor(private http: HttpServiceService, public app: AppComponent) { }

  ngOnInit(): void {
    this.getAllUsersList();
  }

  getAllUsersList() {
    this.http.get_all_users_list().subscribe((response: any) => {
      console.log("response", response);
      this.allUsersDataList = response;
    }, error => {
      this.app.errorHandler(error);
    });
  }

  getParticularUserPosts(data_obj) {
    sessionStorage.setItem("partiUserData", JSON.stringify(data_obj));
    this.app.navigateThis("userposts");
  }
}
