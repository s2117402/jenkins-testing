import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginUser} from '../entities/Request';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {
  private  RootURL = 'https://attserver.herokuapp.com/';
  constructor(
    private http: HttpClient,
  ) { }

  login(user: LoginUser): Observable<any> {
    return this.http.post(this.RootURL + 'login', user);
  }
}
