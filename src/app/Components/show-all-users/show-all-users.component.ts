import { Component, OnInit } from '@angular/core';
import { UsersDataService } from 'src/app/Services/users-data.service';


@Component({
  selector: 'app-show-all-users',
  templateUrl: './show-all-users.component.html',
  styleUrls: ['./show-all-users.component.scss']
})
export class ShowAllUsersComponent implements OnInit {

  getUsersData:any;

  ngOnInit(): void {}

  constructor(private service:UsersDataService){
    //get all user data and display
    this.service.getUserData().subscribe((data)=>{
      console.log(data.results);

      this.getUsersData = data.results });
  }

  //delete user when button click
  deleteData(data:any, id:number){
    if( window.confirm('Are you sure?') ){
      this.service.deteleUser(data.id).subscribe((res)=>{
        console.log(res);
        this.getUsersData.splice(id, 1);
      });
    }
  }

}
