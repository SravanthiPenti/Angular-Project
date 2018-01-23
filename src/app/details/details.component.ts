import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { User } from '../user/user';
import { ActivatedRoute, Router } from '@angular/router';
@Component({

  templateUrl: './details.component.html'
})
export class DetailsComponent {
  user: User;
  constructor(private _userservice: UserService, private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit() {
    this.getUserId();
  }
  getUserId() {
    const id = this.route.snapshot.paramMap.get('id');
    this._userservice.userId(id)
      .subscribe(user => this.user = user);
  }

  onEditSave() {
    const id = this.route.snapshot.paramMap.get('id');
    this._userservice.update(id,this.user).subscribe((users) =>this.router.navigate(['/home']));

    console.log(this.user);
  }
  goBack() {
    this.router.navigate(['/home']);
  }

}