import { Component } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';

  constructor(private router: Router) { }

  navigateThis(page) {
    if (page != "back") {
      let route = page;
      this.router.navigate([route]);
    } else {
      window.history.back();
    }
  }

  errorHandler(getErrorObj) {
    console.log("getErrorObj", getErrorObj);
  }

  logoutFun() {
    localStorage.clear();
    sessionStorage.clear();
    this.navigateThis("login");
  }
}
