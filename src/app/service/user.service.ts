import { Injectable } from '@angular/core';
import { User } from '../user/user-interface';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, HttpModule, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
	constructor(private http: HttpClient, private _httpObj: Http) {

	}
	getUsers(): Observable<any> {
		return this.http.get('http://127.0.0.1:3000/user/getuser').map(response => response);
	}
	userId(id: any): Observable<any> {
		return this.http.get('http://127.0.0.1:3000/user/home/' + id).map(response => response);
	}
	update(id, user): Observable<any> {

		return this.http.put('http://127.0.0.1:3000/user/update/' + id, user).map(response => response);
	}
	addUser(user): Observable<any> {
		user.status = true
		return this.http
			.post('http://127.0.0.1:3000/user/adduser', user).map(response => response);
	}
	upload(file): Observable<any> {
		const headers = new Headers({});
    	let options = new RequestOptions({ headers });
		var formData = new FormData();
		formData.append('imageFile', file);
		return this._httpObj
			.post('http://127.0.0.1:3000/upload', formData, options).map(response => response);
	}
	deleteUser(id): Observable<any> {
		return this.http.delete('http://127.0.0.1:3000/user/deleteUser/' + id)
			.map(response => response);
	}
	getWeather():Observable<any>
	{
		return this.http.get('http://127.0.0.1:3000/weather/getWeather').map(response=>response);
	}

}