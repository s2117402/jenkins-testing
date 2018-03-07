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
    // if(req.username != this.authenticationService.logUserName)
    if(this.jwtService.checkIfJWTInLocalStorage() && req.headers.get('Authorization') == null) {
      const authReq = req.clone({
        setHeaders: {Authorization: this.jwtService.getJWTToken()}
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }

}
