import { Component, OnInit } from '@angular/core';
import {User} from '../users';
import {UserService} from '../user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
users:User[]=[];
  constructor(private userservice:UserService,private activeroute:ActivatedRoute) { }

  ngOnInit() {
    this.userservice.getUsers().subscribe(users=>this.users=users.slice(1,5));

  }


}
