import { Injectable } from '@angular/core';
import {HttpClient, HttpInterceptor} from '@angular/common/http';
import {LoginUser} from '../entities/Request';
import {Observable} from 'rxjs/Observable';
import {ResponseWithJWT} from '../entities/Response';
import {HttpInterceptingHandler} from '@angular/common/http/src/module';
import {HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {JsonWebTokenService} from './json-web-token.service';

@Injectable()
export class AuthenticationService {
  private  RootURL = 'https://attserver.herokuapp.com/';
  constructor(
    private http: HttpClient,
    private jwtService: JsonWebTokenService
  ) { }

  login(user: LoginUser): Observable<ResponseWithJWT> {
    return this.http.post<ResponseWithJWT>(this.RootURL + 'login', user);
  }

  docheck(): Observable<any> {
    return this.http.post(this.RootURL+'check',{hello: 'test'});
  }


}