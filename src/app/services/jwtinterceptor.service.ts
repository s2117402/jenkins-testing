import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {JsonWebTokenService} from './json-web-token.service';
import {AuthenticationService} from './authentication.service';

@Injectable()
export class JwtinterceptorService implements HttpInterceptor{

  constructor(
    private  jwtService: JsonWebTokenService,
    private authenticationService: AuthenticationService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercept:', req.body);
    // Add token in request header
    if(this.jwtService.checkIfJWTInLocalStorage() && req.headers.get('Authorization') == null) {
      const authReq = req.clone({
        setHeaders: {Authorization: this.jwtService.getJWTToken()}
      });
      console.log("authReq", authReq);
      return next.handle(authReq);
    } else {
      console.log("Req", req);
      return next.handle(req);
    }
  }

}
