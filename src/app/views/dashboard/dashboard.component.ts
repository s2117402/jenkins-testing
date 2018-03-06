import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from '../../Services/authentication.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  check() {
    this.authenticationService.docheck().subscribe(res => {
      console.log(res);
    })
  }
}
