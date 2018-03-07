import {EventEmitter, Injectable} from '@angular/core';
import {JWTInLocalStorage} from '../entities/JWTInLocalStorage';

@Injectable()
export class JsonWebTokenService {

  displayUsername: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  setUsernameOnHeader(username: string) {
    this.displayUsername.emit(username);
  }


  storeJWTInLocalStorage(usernmae: string, token: string) {
    localStorage.setItem('JWT',JSON.stringify(new JWTInLocalStorage(usernmae, token)));
  }

  checkIfJWTInLocalStorage(): boolean {
    const jwtInLocalStorage = JSON.parse(localStorage.getItem('JWT'));
    if(jwtInLocalStorage!=null && jwtInLocalStorage.username && jwtInLocalStorage.token) {
      this.setUsernameOnHeader(JSON.parse(localStorage.getItem('JWT')).username)
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
