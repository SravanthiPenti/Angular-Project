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
  


ngOnInit()
{
  this.getUsers();

}
getUsers()
{
this._userservice.getUsers().subscribe((users)=>this.users=users);
}

}
