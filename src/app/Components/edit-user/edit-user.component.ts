import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UsersDataService } from 'src/app/Services/users-data.service';
import { user } from 'src/app/Interface/user.Interafce';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  getId:any;
  editDataForm!: FormGroup;

  constructor(  public formBuilder: FormBuilder,
                private service:UsersDataService,
                private router:Router,
                private activatedRoute:ActivatedRoute) {}

    ngOnInit(): void {

      this.editDataForm = this.formBuilder.group({name: [''],email: ['']});

      this.getId = this.activatedRoute.snapshot.paramMap.get('id');

      this.service.getId(this.getId).subscribe(res => {
          this.editDataForm.patchValue({
          name: res.name,
          email: res.email,
        });
      });
    }

    //any with function name removed
    editData() {
      this.service.updateData(this.getId, this.editDataForm.value as user).subscribe(() => {
          this.router.navigateByUrl('/show-all-users')
        })
    }
}
