import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router, private auth:AuthService) { }

  ngOnInit(): void {
  }

  register(registraionForm:NgForm){
    // console.log(registraionForm.value);
    this.auth.register(registraionForm.value).subscribe((result)=>{
      console.log(result);
      localStorage.setItem('token for register user', result.tokens.access.token);
      this.router.navigate(['/login']);
    })
  }
}
