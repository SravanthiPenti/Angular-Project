import {Component} from '@angular/core';
import {UserService} from '../user/user.service';
@Component({
    selector:'newuser',
    templateUrl:'./newuser.component.html',
})

export class NewUserComponent{
    constructor(private _userservice:UserService)
    {

    }


}