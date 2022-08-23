import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = [
    {
      id:"123",
      name: "Anil Parmar"
    },
    {
      id:"1cam",
      name: "Alvi Multani"
    },
    {
      id:"12asd3",
      name: "Badal Goverdhan"
    },
  ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToUsers(id:string){
    this.router.navigate(['/user',id])
  }

}
