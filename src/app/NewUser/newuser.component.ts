import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../user/user-interface';
import { Router } from '@angular/router';
@Component({

	templateUrl: './newuser.component.html',
})

export class NewUserComponent {
	file: FileList;
	uploadFile:boolean=true;
	maxDate = new Date();
	constructor(private _userservice: UserService, private router: Router) {

	}
	user: User[];
	getFile(event) {
		this.file = event.target.files[0];
	}
	upload(){
		this._userservice.upload(this.file).subscribe((response) => {
			console.log(response)
		}, function (error) {
			console.log(error);
		});
		this.uploadFile=false;
	}


	onSubmit(newuser: User) {
		newuser.file=this.file;
		console.log("sa", newuser);
		this._userservice.addUser(newuser).subscribe((user) => {
			// this.user.push(user)
			this.router.navigate(['/home']);
		}, function (error) {
			console.log(error);
		})
	}
	goBack() {
		this.router.navigate(['/home']);
	}

}