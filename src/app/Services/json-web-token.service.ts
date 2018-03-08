import {EventEmitter, Injectable} from '@angular/core';
import {JWTInLocalStorage} from '../entities/JWTInLocalStorage';
import {UserInfoService } from './user-info.service'

@Injectable()
export class JsonWebTokenService {

  displayUsername: EventEmitter<string> = new EventEmitter<string>();
  constructor(
    private userInfoService: UserInfoService,
  ) { }

  setUsernameOnHeader(username: string) {
    this.displayUsername.emit(username);
  }


  storeJWTInLocalStorage( token: string) {
    localStorage.setItem('JWT',JSON.stringify(new JWTInLocalStorage(token)));
  }

  checkIfJWTInLocalStorage(): boolean {
    const jwtInLocalStorage = JSON.parse(localStorage.getItem('JWT'));
    if(jwtInLocalStorage!=null && jwtInLocalStorage.token) {
      this.setUsernameOnHeader(this.userInfoService.logUserName);
      return true;
    } else {
      return false
    };
  }

  removeJWTInLocalStorage() {
    localStorage.removeItem('JWT');
  }

  getJWTToken() {
    if(this.checkIfJWTInLocalStorage()) {
      return JSON.parse(localStorage.getItem('JWT')).token;
    } else {
      return false;
    }
  }

}
