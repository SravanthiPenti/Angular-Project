import { Component, OnInit } from '@angular/core';
import {User} from '../users';
import {Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-showuserdetails',
  templateUrl: './showuserdetails.component.html',
  styleUrls: ['./showuserdetails.component.css']
})
export class ShowuserdetailsComponent implements OnInit {
  // @Input() user:User;
users:number;
  constructor(private route:ActivatedRoute,private userservice:UserService) { }

  // ngOnInit():void {
  //   this.getUser();
  // }
  ngOnInit()
  {

    let userId=this.route.snapshot.params['id'];
    this.userservice.getDetails(userId).subscribe((Details)=>this.users=Details);
  }
  
  // getUser():void{
  //   const id=+this.route.snapshot.params.get('id');
  //   this.userService.getUser(id).subscribe(user=>this.user=user);
  // }

}
