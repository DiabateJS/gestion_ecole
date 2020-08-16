import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user-auth/user';

@Component({
  selector: 'app-user-connected',
  templateUrl: './user-connected.component.html',
  styleUrls: ['./user-connected.component.css']
})
export class UserConnectedComponent implements OnInit {

  private _user: User;
  private _connectedDate: Date;

  constructor() {
  }

  @Input()
  set user(value: User){
    this._user = value;
  }

  get user(): User {
    return this._user;
  }

  @Input()
  set connectedDate(value: Date){
    this._connectedDate = value;
  }

  get connectedDate(): Date{
    return this._connectedDate;
  }

  ngOnInit(): void {
  }

}
