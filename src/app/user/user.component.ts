import { Component, OnInit, Inject, ViewContainerRef } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { Router } from '@angular/router';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  deleteUser: boolean = false;
  users: User[];
  constructor(private _userservice: UserService, private router: Router, private dialog: MatDialog) {

  }
  ngOnInit() {
    this.getUsers();

  }
  getUsers() {
    this._userservice.getUsers().subscribe((users) => this.users = users);
  }

  onDelete(user: User) {

    console.log("first");
    let dialogRef = this.dialog.open(DeleteUserComponent, {
      width: '400px',
      data: user
    });
    dialogRef.afterClosed().subscribe((response) => {
      console.log(response);
      console.log(this.users);
      console.log(this.users.indexOf(user))

      this.users.splice((this.users.indexOf(user)), 1);
    })
  }

  newUser() {
    this.router.navigate(['/addUser']);
  }
  popup() {
    this.deleteUser = true;
  }

}
@Component({
  templateUrl: 'deleteuser.component.html',
})
export class DeleteUserComponent {
  constructor(public dialogRef: MatDialogRef<DeleteUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _userservice: UserService) {


  }
  onNoClick() {
    this.dialogRef.close();
  }


}