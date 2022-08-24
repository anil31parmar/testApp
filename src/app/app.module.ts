import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule,NgForm} from '@angular/forms';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HOMEComponent } from './Components/home/home.component';
import { UsersComponent } from './Components/users/users.component';
import { UserComponent } from './Components/user/user.component';
import {HttpClientModule} from '@angular/common/http'
import { AuthGuard } from './AuthGuard/auth.guard';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { EditUserComponent } from './Components/edit-user/edit-user.component';
import { ShowAllUsersComponent } from './Components/show-all-users/show-all-users.component';
import { ShowUserDetailComponent } from './Components/show-user-detail/show-user-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    NotFoundComponent,
    HOMEComponent,
    UsersComponent,
    UserComponent,
    AddUserComponent,
    EditUserComponent,
    ShowAllUsersComponent,
    ShowUserDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
