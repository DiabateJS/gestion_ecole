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
  connectedDate: Date;

  constructor(private userService: UserService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.idUser = params['id'];
      this.user = this.userService.getUserById(this.idUser);
    });
    this.connectedDate = new Date();
  }

  ngOnInit(): void {
  }

}
