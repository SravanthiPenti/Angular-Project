import {Injectable} from '@angular/core';
import {User} from './user';
import {USERS} from './user-details';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class UserService{
private users=USERS;

    getUsers():Observable<User[]>
    {
        return of(USERS);
    }

 
    addUsers(user:User)
    {
        this.users.push(user);
    }
    userId(id: number): Observable<User>
    {
        
         
            return of(USERS.find(user => user.id === id));
         
    }
    deleteUser(user:User)
    {
        this.users.splice((this.users.indexOf(user)),1);
    }
}