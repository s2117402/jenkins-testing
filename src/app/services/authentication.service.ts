import { Injectable } from '@angular/core';
import {HttpClient, HttpInterceptor} from '@angular/common/http';
import {LoginUser} from '../entities/Request';

import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import {ResponseOfAuthenticatingJWT, ResponseWithJWT} from '../entities/Response';
import {HttpInterceptingHandler} from '@angular/common/http/src/module';
import {HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {JsonWebTokenService} from './json-web-token.service';
import {UrlService} from './url.service';
@Injectable()
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private jwtService: JsonWebTokenService,
    private urlServiceService:UrlService,
  ) { }

  login(user: LoginUser): Observable<ResponseWithJWT> {
    return this.http.post<ResponseWithJWT>(this.urlServiceService.getLoginURL(), user);
  }

  docheck(): Observable<any> {
    return this.http.get<ResponseOfAuthenticatingJWT>
      (this.urlServiceService.getCheckURL());
  }
}

