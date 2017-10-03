import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {
  constructor(private _http: Http) { }

  login(username: string, password: string) {
    return this._http.post('', JSON.stringify({ username: username, password: password }))
      .map((response: Response) => {
        let user = response.json();
      });
  }
}
