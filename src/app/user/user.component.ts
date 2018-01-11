import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';
import {Router} from '@angular/router';
// import {USERS} from './user-details';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  deleteUser:boolean=false;
  users:User[];
  constructor(private _userservice:UserService,private router:Router)
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
onDelete(user:User)
{
  this.deleteUser=true;
    this._userservice.deleteUser(user).subscribe();
    // this.router.navigate(['/delete']);
}
yes()
{
  this.router.navigate(['/delete']);
}
// no()
// {
//   this.router.navigate(['/home'])
// }

newUser()
{
  this.router.navigate(['/addUser']);
}
popup()
{
  this.deleteUser=true;
}

}
