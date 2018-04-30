import {Component,OnInit  } from '@angular/core';
import {AppData} from '../shared/models/AppData';
import {columns} from '../shared/models/Columns';
import {UserData} from'../shared/models/UserData';

import {AppDataService}  from '../shared/services/AppDataService';


@Component({
  selector: 'appOwner',
  styleUrls: ['./AppOwnerDetails.css'],
  templateUrl: './AppOwnerDetails.html'
})

export class AppOwnerDetails {
  
    appData: AppData[];
    application : string ;
    owner : string ;
    cols  : columns[];
    constructor(private service: AppDataService) { }

    ngOnInit() {
      this.cols = [
            { field:'appID' ,header: 'appID' },
            { field:'appName'  ,header: 'AppName' },
            { field:'owner', header: 'Owner' },
        ];
        
      this.appData = this.service.updatedAppData;
      let userData: UserData[];
      userData= this.service.getUserDetails();
      this.appData.forEach(function (appRecord) {
         appRecord.owner=userData.filter((value)=> appRecord.owner==value.userID).length>0 ?userData.filter((value)=> appRecord.owner==value.userID)[0].userName:"" ;
     }); 
    }  
    addApplication(){
      this.service.updatedAppData.push({appID:this.appData.length+1,appName:this.application,owner:this.owner});
    }   
}