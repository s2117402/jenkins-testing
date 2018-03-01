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


  authenticateUser() {
    if (this.logged) {
      this.logged = '';
    } else {
      this.router.navigate(['login']);
    }
  }
}
