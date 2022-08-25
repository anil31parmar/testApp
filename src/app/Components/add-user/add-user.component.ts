import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { UsersDataService } from 'src/app/Services/users-data.service';
import { Router } from '@angular/router';
import { user } from 'src/app/Interface/user.Interafce';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]);
  role = new FormControl('', [Validators.required]);

  addUserForm = new FormGroup({
    name : this.name,
    email : this.email,
    password : this.password,
    role : this.role
  });

  constructor(private service:UsersDataService, private router:Router) {}

  ngOnInit(): void {
  }

  addNewUser(){
    this.service.postData(this.addUserForm.value as user).subscribe((result)=>{
      this.router.navigateByUrl('/show-all-users');
    })
  }





}
