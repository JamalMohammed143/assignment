import { Component, OnInit } from '@angular/core';
import *  as  sha1 from 'sha1';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  passShowHideBtnTxt: string = "Show";
  loginObj: any = {
    username: "",
    password: ""
  };

  errorObj: any = {
    userNameErrorMsg: "",
    passwordErrorMsg: "",
  }
  constructor(public app: AppComponent) { }

  ngOnInit(): void {
  }
  loginChecker() {
    /* var encPass = sha1("message");
    console.log("encPass", encPass); */
    this.errorObj.userNameErrorMsg = "";
    this.errorObj.passwordErrorMsg = "";
    if (this.loginObj.username && this.loginObj.password) {
      if (this.loginObj.password.length > 4) {
        console.log("loginObj", this.loginObj);
        var user_obj = {
          username: sha1(this.loginObj.username),
          password: sha1(this.loginObj.password)
        };
        localStorage.setItem("userDetails", JSON.stringify(user_obj));
        this.app.navigateThis("userlist");
      } else {
        this.errorObj.passwordErrorMsg = "Password must contain at least 5 characters";
      }
    } else {
      if (!this.loginObj.username) {
        this.errorObj.userNameErrorMsg = "This field is required";
      }
      if (!this.loginObj.password) {
        this.errorObj.passwordErrorMsg = "This field is required";
      }
    }
  }

  showHidePassValue() {
    if (this.passShowHideBtnTxt == "Show") {
      this.passShowHideBtnTxt = "Hide";
    } else {
      this.passShowHideBtnTxt = "Show";
    }
  }


}
