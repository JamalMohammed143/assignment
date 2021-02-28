import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { LoginComponent } from './login/login.component';
import { UserValidatorService } from "./guards/user-validator.service";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "userlist", component: UsersListComponent, canActivate: [UserValidatorService] },
  { path: "userposts", component: UserPostsComponent, canActivate: [UserValidatorService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
