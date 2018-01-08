import { Component, OnInit } from '@angular/core';
import {User} from '../users';
// import {USERS} from '../userdetails';
import {UserService} from '../user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any[];
  selectedUser:User;
  onSelect(user:User):void{
    this.selectedUser=user;
  }


  constructor(private userservice:UserService) { }

  ngOnInit() {
  this.userservice.getUsers().subscribe((Details=>this.users=Details));
  }
  // getUsers():void{
  //   this.userservice.getUsers()
  //   .subscribe(users => this.users = users);
  // }

}
