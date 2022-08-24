import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms'
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  email = new FormControl("",[Validators.required, Validators.email]);
  password = new FormControl("",[Validators.required, Validators.minLength(6)]);

  logInForm:FormGroup = new FormGroup({
    email : this.email,
    password : this.password
  })


  logIn(){
    console.log(this.logInForm.value);
    this.auth.logIn(this.logInForm.value).subscribe((result)=>{
      // console.log(result);
      localStorage.setItem('token', result.tokens.access.token);
      // console.log(this.auth.loggedIn());
      this.router.navigate(['/user'])
    })
  }

}
