import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

// const httpOptions = {
// 	headers: ne({ 'Content-Type': 'application/json' })
// };
@Injectable()
export class UserService {
	// private usersUrl = 'api/users';
	constructor(private http: HttpClient) {

	}
	// getUsers(): Observable<User[]> {
	// 	return this.http.get<User[]>(this.usersUrl);
	// }
	getUsers():Observable<any>
	{
    return this.http.get('http://127.0.0.1:3000/getUser').map(response=>response);
	}
	userId(id: any): Observable<any> {
		// const url = `${this.usersUrl}/${id}`;
		// return this.http.get<User>(url);
		return this.http.get('http://127.0.0.1:3000/home/'+id).map(response=>response);
	}
	update(id,user): Observable<any> {
		
		return this.http.put('http://127.0.0.1:3000/home/'+id,user).map(response=>response);
	}
	addUser(user): Observable<any> {
	user.status = true
		return this.http
		  .post('http://127.0.0.1:3000/adduser', user)
		  .map(response => response);
	}

	// deleteUser(user: User): Observable<User> {
	// 	const id = user.id;
	// 	const url = `${this.usersUrl}/${id}`;
	// 	return this.http.delete<User>(url);


	// }
	deleteUser(id):Observable<any>{
		return this.http.delete('http://127.0.0.1:3000/deleteUser/'+id)
		.map(response=>response);
	}
	// addUser(user:User):Observable<any>{
	// 	return this.http.post(this.usersUrl,user,httpOptions);
	// }
}