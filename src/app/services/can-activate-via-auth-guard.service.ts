import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthenticationService} from './authentication.service';
import {catchError, map} from 'rxjs/operators';
import {JsonWebTokenService} from './json-web-token.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';

@Injectable()
export class CanActivateViaAuthGuardService implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private  jwtService: JsonWebTokenService,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Promise<boolean> {
    return new Promise(resolve => {
      this.authenticationService.docheck().subscribe((res) => {
        /**we will receive 3 status: success with permit/success without enough permit/invalid**/
        if(res.status === 'success') {
          if(res.role === 'admin') { /**success with  enough permit**/
          console.log('you have the admin permit')
            resolve(true);
          } else {  /**success without  enough permit**/
          this.router.navigate(['/nopermit'])
            resolve(false);
          }
        }
      },(err) => {
        if(err.status === 401) { /**invalid**/
        alert('Please login to access this page.')
          this.router.navigate(['login'])
          resolve(false);
        }
      });
    });

  }
}
