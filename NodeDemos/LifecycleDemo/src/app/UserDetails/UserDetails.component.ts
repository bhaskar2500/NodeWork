import {Component,OnInit} from '@angular/core';
import {AppDataService} from '../../../AppDataService';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'users',
  styleUrls: ['./UserDetails.css'],
  templateUrl: './UserDetails.html'
})

export class UserDetails implements OnInit {

    userData: {};
    userDetails= [];
   
    productID: string;
    constructor(private service: AppDataService,  private route: ActivatedRoute) { 
        
        }

    ngOnInit() {
      this.userData = this.service.getUserDetails();
      console.log(this.route.snapshot.params['id']);
      this.userDetails=this.userData[this.route.snapshot.params['id']]; // 3
    }
}