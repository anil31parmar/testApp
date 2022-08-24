import { Component, OnInit } from '@angular/core';
import { UsersDataService } from 'src/app/Services/users-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from '../../Interface/user.Interafce';

@Component({
  selector: 'app-show-user-detail',
  templateUrl: './show-user-detail.component.html',
  styleUrls: ['./show-user-detail.component.scss']
})
export class ShowUserDetailComponent implements OnInit {

  id!:user
  detailsOfSpecificUser:any = [];
  constructor(private activatedRoute:ActivatedRoute, private router:Router,
     private service:UsersDataService) { }

     ngOnInit(): void {
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      this.service.getId(id).subscribe(res => {
        console.log(res);
        this.detailsOfSpecificUser = res;
      });
    }

}
