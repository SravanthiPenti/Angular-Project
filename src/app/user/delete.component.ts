import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from './user.service';
import {User} from './user';
import {ActivatedRoute} from '@angular/router';
@Component({
template:`<h2>Successfully Deleted</h2>
<button class="btn btn-info" (click)="goHome()">Home</button>

`,
})
export class DeleteComponent {
constructor(private router:Router,private _userservice:UserService,private route:ActivatedRoute)
{

}
// value="hello";
user:User;

goHome()
{
this.router.navigate(['/home']);
}
}
