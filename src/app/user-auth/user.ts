export class User {
  id: number;
  login: string;
  password: string;

  constructor(id: number, login: string, password: string) {
    this.id = id;
    this.login = login;
    this.password = password;
  }

  toString(): string{
    return `[id=${this.id} ,login=${this.login},password=${this.password}]`;
  }
}
