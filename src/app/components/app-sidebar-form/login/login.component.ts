import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from'../../../Services/authentication.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginUser} from '../../../entities/Request';
import {JWTInLocalStorage} from '../../../entities/JWTInLocalStorage';
import {Router} from '@angular/router';
import {JsonWebTokenService} from '../../../Services/json-web-token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userGroup: FormGroup;
  wrongPassword = false;
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private jwtService: JsonWebTokenService,
    private router: Router
  ) {
    this.userGroup = formBuilder.group({
      username: ['',[Validators.required]],
      password: ['',[Validators.required]]
    });
  }
  ngOnInit() {
  }


  login() {
    this.wrongPassword = false;
    const loginUser = new LoginUser(this.userGroup.get('username').value,
      this.userGroup.get('password').value);
    this.authenticationService.login(loginUser).subscribe(res  => {
      if(res.status == true) {
        console.log('this is true' + res.status)
        this.jwtService.storeJWTInLocalStorage(res.username, res.token);
        this.router.navigate(['']);
      } else {
        this.wrongPassword = true;
      }
    })

  }

}
