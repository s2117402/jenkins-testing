import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {JsonWebTokenService} from './json-web-token.service';

@Injectable()
export class JwtinterceptorService implements HttpInterceptor{

  constructor(
    private  jwtService: JsonWebTokenService
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
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
