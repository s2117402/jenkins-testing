import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthenticationService} from './authentication.service';
import {map} from 'rxjs/operators';

@Injectable()
export class CanActivateViaAuthGuardService implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authenticationService.docheck().pipe(map(res => {
      if(res.status === 'success' && res.role === 'admin') { //check if having the permit
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
