export class JWTInLocalStorage {
  username: string;
  token: string;

  constructor(username: string, token: string) {
    this.username = username;
    this.token = token;
  }

  setUsername(username: string) {
    this.username = username;
  }

  setToken(token: string) {
    this.token = token;
  }

  getUsername() {
    return this.username;
  }

  getToken() {
    return this.token;
  }
}
