import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../user-auth/user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  private idUser:number;
  user: User;

  constructor(private userService: UserService,
              private route: ActivatedRoute) {
    this.user = new User(-1,'','');
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
          this.idUser = params['id'];
          this.user = this.userService.getUserById(this.idUser);
    });
  }

}
