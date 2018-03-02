import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from'../../Services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {
  logged = 'wei sun';
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {}


  authenticateUser() {
      if (!this.logged) {
        this.router.navigate(['login']);
     }
  }

  LogOut() {
    this.logged = '';
  }
}
