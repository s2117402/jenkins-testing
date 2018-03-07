import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthenticationService} from './authentication.service';
import {map} from 'rxjs/operators';
import {JsonWebTokenService} from './json-web-token.service';

@Injectable()
export class CanActivateViaAuthGuardService implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private  jwtService: JsonWebTokenService,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authenticationService.docheck().pipe(map(res => {
      console.log('canActivate res,', res);
      if(res.username != this.authenticationService.logUserName) {
        this.authenticationService.logUserName = '';
        this.jwtService.removeJWTInLocalStorage();
        this.router.navigate(['login']);
      }
      else if(res.status === 'success' && res.role === 'admin' && res.username === this.authenticationService.logUserName) { //check if having the permit
        console.log('res true role = '+ res.role);
        return true;
      } else {
        console.log('no permit')
        this.router.navigate(['/nopermit'])
        return false;
      }
    }));
  }
}
