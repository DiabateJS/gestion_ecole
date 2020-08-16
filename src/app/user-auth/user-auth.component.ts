import { Component, OnInit } from '@angular/core';
import {User} from './user';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  user: User;
  constructor(private userService: UserService,
              private router: Router) {
    this.user = new User(0,'','');
  }

  ngOnInit(): void {
  }

  doAuth(): void{
    const isAuth: boolean = this.userService.isUserAuth(this.user.login, this.user.password);
    if (isAuth){
      let currentUser: User = this.userService.getUserByLoginPassword(this.user.login, this.user.password);
      //Redirect to accueil page
      this.router.navigate(['/accueil', currentUser.id]);
    }else{
      console.error('Echec authentification');
    }
  }

}
