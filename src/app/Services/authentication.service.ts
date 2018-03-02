import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
  loggedIn = true;
  constructor() { }

  getLoginStatus() {
    if (localStorage.getItem('JWT')) {
      return localStorage.getItem('JWT');
    } else {
      return '';
    }
  }


}
