export class JWTInLocalStorage {
  token: string;
  constructor(token: string) {
      this.token = token;
  }
  setToken(token: string) {
    this.token = token;
  }
  getToken() {
    return this.token;
  }

  // constructor(username: string, token: string) {
  //   this.username = username;
  //   this.token = token;
  // }
  // username: string;
  // setUsername(username: string) {
  //   this.username = username;
  // }
  // getUsername() {
  //   return this.username;
  // }

}
