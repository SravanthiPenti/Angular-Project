import { Component, OnInit, Inject, ViewContainerRef } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from './user-interface';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import * as _ from 'lodash';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  deleteUser: boolean = false;
  users: User[];
  gridViewShow: boolean = false;
  listViewShow: boolean = true;
  sortByNameAsc: boolean;

  sortByName() {
    if (this.sortByNameAsc) {
      this.sortByNameAsc = false;
      this.users = _.reverse(this.users);
    } else {
      this.sortByNameAsc = true;
      this.users = _.sortBy(this.users, ['fullname'])
    }
  }

  gridView() {
    this.gridViewShow = true;
    this.listViewShow = false;
  }
  ListView() {
    this.gridViewShow = false;
    this.listViewShow = true;
  }
  constructor(private _userservice: UserService, private router: Router, private dialog: MatDialog, public _toastr: ToastsManager, public vcf: ViewContainerRef) {
    this._toastr.setRootViewContainerRef(vcf);

  }


  ngOnInit() {
    this.getUsers();

  }
  getUsers() {
    var thisObj = this;
    this._userservice.getUsers().subscribe((users) => thisObj.users = users);
  }


  onDelete(user) {

    console.log("first");
    let dialogRef = this.dialog.open(DeleteUserComponent, {
      width: '400px',
      data: user
    });
    dialogRef.afterClosed().subscribe((response) => {
      console.log(response);
      if (response) {

        var _thisObj = this;
        this._userservice.deleteUser(user._id).subscribe((users) => {

          _thisObj.users.splice((_thisObj.users.indexOf(user)), 1);

        }

        )

        this._toastr.success("Successfully deleted!");
      }
    })
  }

  newUser() {
    this.router.navigate(['/addUser']);
  }
  showUser(user: User) {
    let dialogRef = this.dialog.open(ShowUserComponent, {
      width: '500px',
      data: user
    })
  }


}



@Component({
  templateUrl: '../delete/deleteuser.component.html',
})
export class DeleteUserComponent {
  constructor(public dialogRef: MatDialogRef<DeleteUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _userservice: UserService, public router: Router) {


  }

  onNoClick() {
    this.dialogRef.close();
  }


}
@Component({
  templateUrl: '../showpopup/showuser.component.html',
})
export class ShowUserComponent {
  constructor(public dialogRef: MatDialogRef<ShowUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _userservice: UserService) {


  }
  onClick() {
    this.dialogRef.close();
  }


}