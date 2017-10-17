import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { NgForm } from '@angular/forms';

import { User } from './user';
import { constant } from './constant';

@Injectable()
export class UserService {
  _url: string = constant.url;
  constructor(private _http: Http) { }

  register(user: any) {
    console.log(user)
    return this._http.get(this._url + `add_user?username=${user.username}&password=${user.password}&role=admin`)
      .map((res: any) => {
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
  create(poll: any) {
    return this._http.get(this._url + `add_poll?title=${poll.title}&options=${poll.option1}____${poll.option2}____${poll.option3}____${poll.option4}`)
      .map((res: any) => {
        return res.json();
      })
  }
  view() {
    return this._http.get(this._url + `list_polls`)
      .map((res: any) => {
        return res.json();
      })
  }
  vote(id:string,options:string){
    return this._http.get(this._url + `do_vote?id=${id}&option_text=${options}`).subscribe(res=>console.log(res),error=>{console.log("error")});
  }
  summary(id:string){
    return this._http.get(this._url+  `list_poll?id=${id}`);
  }
  delete(id:string){
    return this._http.get(this._url + `delete_poll?id=${id}`);
  }
  editTitle(id:any,title:any){
    return this._http.get(this._url+`update_poll_title?id=${id}&title=${title}`)
    .map((res:any)=>{
      return res.json();
    })
  }
  newOption(id:any,option:any){
    return this._http.get(this._url+`add_new_option?id=${id}&option_text=${option}`)
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
