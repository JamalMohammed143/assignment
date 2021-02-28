import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class UserValidatorService {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    var isLoggedIn = false;
    var userObj = JSON.parse(localStorage.getItem("userDetails"));
    if (userObj) {
      if (userObj.username && userObj.password) {
        isLoggedIn = true;
      } else {
        isLoggedIn = false;
      }
    } else {
      isLoggedIn = false;
    }
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
