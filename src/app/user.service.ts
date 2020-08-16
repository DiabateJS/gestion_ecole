import { Injectable } from '@angular/core';
import {User} from './user-auth/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];

  constructor() {
    this.users = [
      new User(1,'jean.diabate','M@st3rmd'),
      new User(2,'isma.diabate','Peace2020'),
      new User(3,'fatou.diabate','fatley86')
    ];
  }

  getUserById(id: number): User{
    return this.users.filter(user => user.id == id)[0];;
  }

  getUserByLoginPassword(login: string, pwd: string): User{
    return this.users.filter(user => user.login === login && user.password === pwd)[0];
  }

  isUserAuth(login:string, pwd:string):boolean {
    let res: User[] = [];
    res = this.users.filter(user => user.login === login && user.password === pwd);
    return res.length === 1;
  }
}
