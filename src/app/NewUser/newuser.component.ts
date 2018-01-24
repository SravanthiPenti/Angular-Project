import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../user/user-interface';
import { Router } from '@angular/router';
@Component({

	templateUrl: './newuser.component.html',
})

export class NewUserComponent {

	constructor(private _userservice: UserService, private router: Router) {

	}
	user: User[];

	onSubmit(newuser: User) {
		this._userservice.addUser(newuser).subscribe((user) => {
			// this.user.push(user)
			this.router.navigate(['/home']);
		}, function(error){
			console.log(error);
		})

	}
	goBack() {
		this.router.navigate(['/home']);
	}

}