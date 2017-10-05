import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './user';
import { constant } from './constant';

@Injectable()
export class UserService {
  _url: string = constant.url;
  constructor(private _http: Http) { }

  create(user: any) {
    console.log(user)
    return this._http.get(this._url + `add_user?username=${user.username}&password=${user.password}&role=admin`)
      .map((res:any) => {
        return res.json();
      });
  }
  login(username: string, password: string) {
    return this._http.post(this._url + `login?username=${username}&password=${password}`, JSON.stringify({ username: username, password: password }))
      .map((response: Response) => {
        let user = response.json();
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user))
        }
        return user;
      });
  }
  logout() {
    localStorage.removeItem('currentUser');
  }
}
