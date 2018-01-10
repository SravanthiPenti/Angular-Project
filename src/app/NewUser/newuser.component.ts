import {Component} from '@angular/core';
import {UserService} from '../user/user.service';
import {User} from '../user/user';
import{Router} from '@angular/router';
@Component({

    templateUrl:'./newuser.component.html',
})

export class NewUserComponent{
   
    constructor(private _userservice:UserService,private router:Router)
    {

    }
    user:User[];
    // onSubmit(user:User)
    // {
    //     console.log(user);
    //     this._userservice.addUsers(user);
    //     this.router.navigate(['/home']);
    // }
    onSubmit(newuser:User){
        this._userservice.addUser(newuser).subscribe((user)=>{
            this.user.push(user)})
            this.router.navigate(['/home']);
        
    }

}