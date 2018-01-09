import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';
// import {USERS} from './user-details';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  users:User[];
  constructor(private _userservice:UserService)
  {

  }
  // editForm:boolean=false;
  // newForm:boolean=false;
  // addUser()
  // {
  // this._userservice.getUsers()
  // }
  // editUser(user:User)
  // {
  //   this.users=user;
  // }
  // addUser()
  // {
  //   this.newForm=true;
  // }
  // onSave(user)
  // {
  //   if(this.newForm)
  //   {
  //   this._userservice.addUsers(user);
  //   }
  //   this.newForm=false;
  // }

//   userEdit(user:User)
//   {
// this.selectedUser=user;
// this.editForm=true;
//   }
//   onEdit()
//   {
//     this.editForm=false;
//   }

ngOnInit()
{
  this.getUsers();

}
getUsers()
{
this._userservice.getUsers().subscribe((users)=>this.users=users);
}

}
