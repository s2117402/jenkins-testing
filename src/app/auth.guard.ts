import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { AuthenticationService } from './Services/authentication.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor (
    private auth: AuthenticationService,
    private router: Router
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.auth.userSubject
      .pipe(
        map(user => {
          if (user === null){
            this.router.navigate(['/login']);
          }
          return user !== null;
        })
      );
  }
}
