import {Component,OnInit} from '@angular/core';
import {AppDataService} from '../shared/services/AppDataService';
import {UserData} from '../shared/models/UserData';
import {AppData} from '../shared/models/AppData';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'users',
  styleUrls: ['./UserDetails.css'],
  templateUrl: './UserDetails.html'
})

export class UserDetails implements OnInit {

    userData:  UserData[];
    appData : AppData [];
    productID: string;
    userName : string;
    constructor(private service: AppDataService,  private route: ActivatedRoute) { 
        
        }

    ngOnInit() {
      this.refreshTheData();
    }    

    addData(){
      this.userData=this.service.addNewUser({password:null,token:null, userName:this.userName 
                    ,date: Date() ,userID: parseInt(this.service.getUserDetails().sort(i=>i.userID)[0].userID)+1 }
                    ,parseInt(this.route.snapshot.params['id']));
      this.refreshTheData();
    }

    removeData(){
    this.userData=this.service.removeUser(this.userData.find(i=>i.userName.toLowerCase()==this.userName.toLowerCase()).userID
                  ,parseInt(this.route.snapshot.params['id']));
    this.refreshTheData();
    }

    refreshTheData(){
      let userIDVal : number[] = [];
      let routeQueryPar: number;
      routeQueryPar=parseInt(this.route.snapshot.params['id']);
      this.service.getUserAppDetails().filter((record) => record.appID==routeQueryPar).forEach(function(value) { userIDVal.push(value.userID); } );
      this.userData= this.service.getUserDetails().filter((record)=> userIDVal.includes(record.userID) );
      this.appData=this.service.updatedAppData.filter((record) => record.appID==routeQueryPar);
    }
}