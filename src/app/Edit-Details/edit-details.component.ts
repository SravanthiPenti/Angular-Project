import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../user/user-interface';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
@Component({

  templateUrl: './edit-details.component.html'
})
export class EditDetailsComponent {
  // user: User;
  // actualUser: User;
  user = {
    fullname: "",
    email: "",
    hobbies: "",
    dateofBirth: ""
  }
  actualUser = this.user;
  pattern=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  maxDate=new Date();

  constructor(private _userservice: UserService, private route: ActivatedRoute, private router: Router) {

  }

  
  ngOnInit() {
    this.getUserId();
  }
  getUserId() {
    const id = this.route.snapshot.paramMap.get('id');
    this._userservice.userId(id)
      .subscribe(user => {
        this.user = user;
        this.actualUser =_.cloneDeep(user);
      });
  }

  onEditSave() {
    const id = this.route.snapshot.paramMap.get('id');
    this._userservice.update(id,this.user).subscribe((users) =>this.router.navigate(['/home']));

    console.log(this.user);
  }
  goBack() {
    this.router.navigate(['/home']);
  }
  checkFields() {


    if(this.user.fullname && this.user.email && this.user.hobbies && this.user.dateofBirth && this.pattern.test(this.user.email)) {
      return true
    } else {
      return false
    }
  }

  checkChanges(){
    return ((this.actualUser.fullname == this.user.fullname)&&(this.actualUser.email == this.user.email)&&(this.actualUser.hobbies == this.user.hobbies)&&(this.actualUser.dateofBirth == this.user.dateofBirth));
  }



}