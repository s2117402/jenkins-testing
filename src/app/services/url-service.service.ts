import { Injectable } from '@angular/core';

@Injectable()
export class UrlServiceService {

  private RootURL = 'http://localhost:3000/';
  //RootURL = 'https://attserver.herokuapp.com/';
  constructor() { }

  getLoginURL(): string {
    return `${this.RootURL}login`;
  }

  getCheckURL() {
    return `${this.RootURL}check`;
  }

}
