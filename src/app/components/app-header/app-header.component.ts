import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {
  logged = 'wei sun';
  constructor(
    private router: Router
  ) {}


  logout() {
    this.logged = '';
  } //Log out

  jumpToLogin() {
    if (!this.logged) {
      this.router.navigate(['login']);
    }
  }//if user is not logged in,go to login page
}
