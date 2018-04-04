import { Injectable } from '@angular/core';

@Injectable()
export class UrlService {

  // private RootURL = 'http://localhost:3000/';
  private RootURL = 'https://attserver.herokuapp.com/';
  private RootURL2= 'http://localhost:5000/'
  constructor() { }

  getLoginURL(): string {
    return `${this.RootURL}login`;
  }

  getCheckURL() {
    return `${this.RootURL}check`;
  }

  getTenants() {
    return this.RootURL2+'tenants';
  }

}
