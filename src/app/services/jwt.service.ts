import {EventEmitter, Injectable} from '@angular/core';
import {JWTInLocalStorage} from '../entities/JWTInLocalStorage';

@Injectable()
export class JwtService {
  displayUsername: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  setUsernameOnHeader(username: string) {
    this.displayUsername.emit(username);
  }


  storeJWTInLocalStorage(usernmae: string, token: string) {
    localStorage.setItem('JWT',JSON.stringify(new JWTInLocalStorage(
      usernmae,token)));
  }

  checkIfJWTInLocalStorage(): boolean {
    if(localStorage.getItem('JWT')) {
      this.setUsernameOnHeader(JSON.parse(localStorage.getItem('JWT')).username)
      return true;
    } else {
      return false
    };
  }

  removeJWTInLocalStorage() {
    localStorage.removeItem('JWT');
  }
}
