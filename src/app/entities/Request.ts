export class LoginUser {
  private _username: String;
  private _password: String;

  constructor(username: String, password: String) {
    this._username = username;
    this._password = password;
  }

  get username(): String {
    return this._username;
  }

  set username(value: String) {
    this._username = value;
  }

  get password(): String {
    return this._password;
  }

  set password(value: String) {
    this._password = value;
  }
}
