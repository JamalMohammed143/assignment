import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  rootURL: any = "https://jsonplaceholder.typicode.com/"
  constructor(private http: HttpClient) { }

  get_all_users_list() {
    return this.http.get(this.rootURL + "users");
  }

  get_parti_user_posts() {
    return this.http.get(this.rootURL + "posts");
  }
}
