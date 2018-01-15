import { Injectable } from '@angular/core';
import { User } from './user';
// import {USERS} from './user-details';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class UserService {
    // private users=USERS;
    private usersUrl = 'api/users';
    constructor(private http: HttpClient) {

    }
    getUsers(): Observable<User[]> {
        // return of(USERS);
        return this.http.get<User[]>(this.usersUrl);
    }
    userId(id: number): Observable<User> {
        const url = `${this.usersUrl}/${id}`;
        return this.http.get<User>(url);
    }
    update(user: User): Observable<any> {
        return this.http.put(this.usersUrl, user, httpOptions);
    }
    addUser(user: User): Observable<any> {
        return this.http.post(this.usersUrl, user, httpOptions);
    }
    // addUsers(user:User)
    // {
    //     this.users.push(user);
    // }
    // userId(id: number): Observable<User>
    // {


    //         return of(USERS.find(user => user.id === id));

    // }
    // deleteUser(user:User)
    // {
    //     this.users.splice((this.users.indexOf(user)),1);
    // }
    deleteUser(user: User): Observable<User> {
        const id = user.id;
        const url = `${this.usersUrl}/${id}`;
        return this.http.delete<User>(url, httpOptions);


    }
    searchUsers(term:string):Observable<User[]>
    {
        if(!term.trim())
        {
            return of([]);
        }
        return this.http.get<User[]>(`api/users/?fullname=${term}`);
    }
}