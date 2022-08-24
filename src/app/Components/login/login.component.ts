import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms'
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService) { }

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
      console.log(result);
      localStorage.setItem('token for login user', result.tokens.access.token);

    })
  }

}
