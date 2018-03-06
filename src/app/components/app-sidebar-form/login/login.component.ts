import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from'../../../Services/authentication.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginUser} from '../../../entities/Request';
import {JwtService} from '../../../services/jwt.service';
import {JWTInLocalStorage} from '../../../entities/JWTInLocalStorage';
import {Router} from '@angular/router';
import {User} from '../../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  userGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private jwtService: JwtService,
    private router: Router
  ) {
    this.userGroup = formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  ngOnInit() {
  }
  private loginUser = new User();

  login() {
    // const loginUser = new LoginUser(this.userGroup.get('username').value,
    //   this.userGroup.get('password').value);
     this.loginUser.username =this.userGroup.get('username').value;
     this.loginUser.password =this.userGroup.get('password').value;
    this.authenticationService.login(this.loginUser).subscribe(res  => {
      console.log(res.user.status); 
      if(res.user.status === true) {
        this.jwtService.storeJWTInLocalStorage(res.user.username, res.user.token);
        this.router.navigate(['']);
      }
    })

  }

}
