import {Component} from '@angular/core';
import {UserService} from '../user.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../users';
@Component(
    {
        template:`
        UserId:<input type="text" [(ngModel)]="users.id">
        <br>
        UserName:<input type="text" [(ngModel)]="users.name">
        
        `,
    }
)


export class ShowComponent{
    users:any=[];
constructor(private userservice:UserService,private route:ActivatedRoute)
{

}
ngOnInit()
{
    let userId=this.route.snapshot.params['id'];
    this.userservice.getDetails(userId).subscribe((Details)=>this.users=Details);
}
}