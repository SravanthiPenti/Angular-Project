import { Component, OnInit,Inject } from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';
import {Router} from '@angular/router';
// import {USERS} from './user-details';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  deleteUser:boolean=false;
  users:User[];
  constructor(private _userservice:UserService,private router:Router,private dialog:MatDialog)
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
// onDelete(user:User)
// {
//   this.deleteUser=true;
//     this._userservice.deleteUser(user).subscribe();
//     // this.router.navigate(['/delete']);
// }
onDelete(user:User){
  // this.deleteUser=true;
  this._userservice.deleteUser(user).subscribe();
  let dialogRef=this.dialog.open(DeleteUserComponent,{
    width:'250px'
  } );
  dialogRef.afterClosed().subscribe(()=>{
    console.log('The Dialog was Closed');
  })
}

// no()
// {
//   this.router.navigate(['/home'])
// }
// yes()
// {
//   this.router.navigate(['/delete']);
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
@Component({
  templateUrl:'deleteuser.component.html',
})
export class DeleteUserComponent{
  constructor(public dialogRef:MatDialogRef<DeleteUserComponent>,
  @Inject(MAT_DIALOG_DATA)public data:any,private router:Router,private dialog:MatDialog)
  {

  }
  onNoClick()
  {
    this.dialogRef.close();
  }
  yes():void
{
  let dialogRef=this.dialog.open(DeleteMessageComponent,{
    width:'250px'
  } );

  dialogRef.afterClosed().subscribe(()=>{
    console.log('Successfully Deleted');
  })
  this.router.navigate(['/delete']);
}
}
@Component({
templateUrl:'deletemessage.component.html',
})
export class DeleteMessageComponent{
constructor(public dialogRef:MatDialogRef<DeleteUserComponent>,@Inject(MAT_DIALOG_DATA)public data:any,private router:Router)
{

}
onClick()
{
  this.router.navigate(['/home']);
  this.dialogRef.close();
}
}