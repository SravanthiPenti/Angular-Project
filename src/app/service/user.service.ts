import { Injectable } from '@angular/core';
import { User } from '../user/user-interface';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import {Http, RequestOptionsArgs, RequestOptions, Headers} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
	constructor(private http: HttpClient) {

	}
	getUsers():Observable<any>
	{
    return this.http.get('http://127.0.0.1:3000/getUser').map(response=>response);
	}
	userId(id: any): Observable<any> {
		return this.http.get('http://127.0.0.1:3000/home/'+id).map(response=>response);
	}
	update(id,user): Observable<any> {
		
		return this.http.put('http://127.0.0.1:3000/home/'+id,user).map(response=>response);
	}
	addUser(user): Observable<any> {
	
	var formData = new  FormData();
	console.log(user);
	formData.append('files',user.image);
	formData.append('dateofBirth', user.dateofBirth);
	formData.append('email',user.email);
	formData.append('fullname',user.fullname);
	formData.append('hobbies',user.hobbies);

	user.status = true
		return this.http
		  .post('http://127.0.0.1:3000/adduser', formData)
		  .map(response => response);
	}
	deleteUser(id):Observable<any>{
		return this.http.delete('http://127.0.0.1:3000/deleteUser/'+id)
		.map(response=>response);
	}

}