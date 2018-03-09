import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {JWTInLocalStorage} from '../../entities/JWTInLocalStorage';
import {JsonWebTokenService} from '../../services/json-web-token.service';
import {UserInfoService} from '../../services/user-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent implements OnInit{
  logged;
  constructor(
    private router: Router,
    private jwtService: JsonWebTokenService,
    private authenticationService: AuthenticationService,
    private userInfoService: UserInfoService,
  ) {
  }

  ngOnInit() {
    this.jwtService.displayUsername.subscribe(username => {
      this.logged = username;
      this.userInfoService.logUserName = username;
      console.log('logged User is= '+this.logged)
    })
    //when user was authenticated, show his name on header
    if(this.jwtService.checkIfJWTInLocalStorage()) {
      this.authenticationService.docheck().subscribe(res => {
      this.logged = res.username;
      this.jwtService.setUsernameOnHeader(res.username);
      });
    }
    //check if a valid user info was stored in localStorage, if true send the valid username out
  }

  logout() {
    this.logged = '';
    this.jwtService.removeJWTInLocalStorage();
  } //Log Out

  jumpToLogin() {
    if (!this.logged) {
      this.router.navigate(['login']);
    }
  }//if user is not logged in,go to login page
}
