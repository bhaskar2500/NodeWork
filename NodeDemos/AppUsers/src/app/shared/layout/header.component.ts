import { Component, OnInit } from '@angular/core';

import { UserData } from '../models/UserData';
import { UserdataService } from '../services/userData.service';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(
    private userService: UserdataService
  ) {}

  currentUser: {};

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
  }
}
