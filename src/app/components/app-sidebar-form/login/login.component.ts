import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginUser} from '../../../entities/Request';
import {JwtService} from '../../../services/jwt.service';
import {JWTInLocalStorage} from '../../../entities/JWTInLocalStorage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authentication: AuthenticationService,
    private jwtService: JwtService,
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
    const loginUser = new LoginUser(this.userGroup.get('username').value,
      this.userGroup.get('password').value);
    this.authentication.login(loginUser).subscribe(res  => {
      console.log(res.status)
      if(res.status === true) {
        this.jwtService.storeJWTInLocalStorage(res.username, res.token);
        this.router.navigate(['']);
      }
    })

  }

}
