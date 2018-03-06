import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from'../../Services/authentication.service';
import {JWTInLocalStorage} from '../../entities/JWTInLocalStorage';
import {JsonWebTokenService} from '../../Services/json-web-token.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent implements OnInit{
  logged;
  constructor(
    private router: Router,
    private jwtService: JsonWebTokenService
  ) {
  }

  ngOnInit() {
    this.jwtService.displayUsername.subscribe(usernmae => {
      this.logged = usernmae;
      console.log('received!logged = '+this.logged)
    })
    //when user was authenticated, show his name on header
    this.jwtService.checkIfJWTInLocalStorage();
    //check if a valid user info was stored in localStorage, if true send the valid
    //username out
  }


  logout() {
    this.logged = '';
    this.jwtService.removeJWTInLocalStorage();
  } //Log OUt

  jumpToLogin() {
    if (!this.logged) {
      this.router.navigate(['login']);
    }
  }//if user is not logged in,go to login page
}
