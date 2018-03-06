import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginUser} from '../entities/Request';

import { User } from '../models/user';

import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable()
export class AuthenticationService {
  private  RootURL = 'https://attserver.herokuapp.com/';
  userSubject: Subject<User> = new BehaviorSubject<User>(null);

  constructor(
    private http: HttpClient,
  ) { }

  // login(user: LoginUser): Observable<any> {
  //   return this.http.post(this.RootURL + 'login', user);
  // }
  login(user: User): Observable<{user: User}> {
    return this.http.post<{user: User}>(`${this.RootURL}/login`, user)
      .pipe(
        map((res) => {
          if (res) {
            this.userSubject.next(res.user);
          }
          return res;
        })
      );
  }

}
