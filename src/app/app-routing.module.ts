import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './AuthGuard/auth.guard';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { EditUserComponent } from './Components/edit-user/edit-user.component';
import { HOMEComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { RegisterComponent } from './Components/register/register.component';
import { ShowAllUsersComponent } from './Components/show-all-users/show-all-users.component';
import { ShowUserDetailComponent } from './Components/show-user-detail/show-user-detail.component';
import { UserComponent } from './Components/user/user.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: "",
    //redirectTo: "/login",
    // pathMatch: 'full'
    component: HOMEComponent
  },
  {
    // path: "user/:id",
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard]
  },

  //////
  {
    path: 'addUser',
    component: AddUserComponent
    },
    {
      path: 'show-all-users',
      component: ShowAllUsersComponent
    },
    {
      path: 'edit-user/:id',
      component: EditUserComponent
    },
    {
      path: 'show-user-detail/:id',
      component: ShowUserDetailComponent
    },
  ///////
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
