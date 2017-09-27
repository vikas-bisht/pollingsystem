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
    return this._http.get(this._url+`add_user?username=${user.name}&password=${user.password}&role=admin`)
      .map((res: Response) => res.json());
  }
}
