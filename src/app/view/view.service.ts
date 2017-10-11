import { Injectable } from '@angular/core';

import { UserService } from '../user.service';

@Injectable()

export class ViewService {
  constructor(
    private _userservice: UserService
  ) { }
  view() {
   return  this._userservice.view();
  }
}
