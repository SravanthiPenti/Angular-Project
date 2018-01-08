import { Injectable } from '@angular/core';
// import {User} from './users';
import {USERS} from './userdetails';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  constructor(private http:Http) { }
  getUsers():Observable<any[]>{
    // return of(USERS);
    return this.http.get("./assets/userdetails.json").map((response:Response)=><any[]>response.json());
  }
  // getUser(id:number):Observable<User>{
  // return of(USERS.find(user=>user.id===id));
  // }
  getDetails(id:number)
  {
return this.http.get("./assets/userdetails.json/"+id).map((response:Response)=><number>response.json());
  }



}
