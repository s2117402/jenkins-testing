import { Injectable } from '@angular/core';
import {HttpClient, HttpInterceptor} from '@angular/common/http';
import {LoginUser} from '../entities/Request';

import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import {ResponseOfAuthenticatingJWT, ResponseWithJWT} from '../entities/Response';
import {HttpInterceptingHandler} from '@angular/common/http/src/module';
import {HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {JsonWebTokenService} from './json-web-token.service';

@Injectable()
export class AuthenticationService {
  //private  RootURL = 'https://attserver.herokuapp.com/';
  private RootURL = 'http://localhost:3000/';
  logUserName;
  constructor(
    private http: HttpClient,
    private jwtService: JsonWebTokenService
  ) { }

  login(user: LoginUser): Observable<ResponseWithJWT> {
    return this.http.post<ResponseWithJWT>(`${this.RootURL}login`, user);
  }

  docheck(): Observable<any> {
    return this.http.post<ResponseOfAuthenticatingJWT>
      (`${this.RootURL}check`, {request: 'authenticating JWT'});
  }
}
