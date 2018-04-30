import {Injectable} from '@angular/core';
import {AppData} from '../models/AppData';
import {UserData} from '../models/UserData';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {AppUsers} from '../models/AppUsers';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Injectable()
export class AppDataService {
    private currentUserSubject = new BehaviorSubject<UserData>({} as UserData);
    public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
    updatedAppData : AppData[];
    userData : UserData[];
    app_users : AppUsers[];
    
    constructor() {
        
     this.updatedAppData=[{"appID":1,"owner":1, "appName":"Parking"},
                                {"appID":2,"owner":2, "appName":"OneDrive"},
                                {"appID":3,"owner":1, "appName":"GSuite"},
                                {"appID":4,"owner":2, "appName":"Audit CRM"},
                                {"appID":5,"owner":1, "appName":"BA-60"}];

    this.userData=[
                 {"userID":1,"userName":"Bhaskar",date:"3/2/2017" ,password:"password" ,token:""}  ,
                 {"userID":2,"userName":"Ishan",   date:"2/2/2018",password:"password" ,token:""}  ,
                 {"userID":4,"userName":"Divya",  date:"6/2/2019" ,password:"password" ,token:""} ,
                 {"userID":5,"userName":"Vinod",  date:"6/2/2019" ,password:"password" ,token:""} ,
                 {"userID":6,"userName":"Rishi",  date:"6/2/2019" ,password:"password" ,token:""} ,
                 {"userID":7,"userName":"Vijay",  date:"6/2/2019" ,password:"password" ,token:""} ,
                 {"userID":8,"userName":"Josh",   date:"6/2/2019" ,password:"password" ,token:""} ,
                 {"userID":9,"userName":"David",  date:"6/2/2019" ,password:"password" ,token:""} ,]
                 
    this.app_users = [{userID:1,appID:1},
                {userID:2,appID:2},
                {userID:3,appID:2},
                {userID:4,appID:2},
                {userID:5,appID:5},
                {userID:6,appID:5},
        ];
                }

    getUserDetails() {
        return this.userData;
    }
    getUserAppDetails(){
        return this.app_users
    }
    addNewUser(user : UserData,appID :number){
        this.userData.push(user);
        this.app_users.push({userID:user.userID,appID:appID});
        return this.userData;
    }
     removeUser(user : number ,appID :number){
        this.userData.splice(this.userData.findIndex(rec=>rec.userName==user),1) 
        this.app_users.splice(this.app_users.findIndex(rec=>rec.userID==user && rec.appID== appID));
        return this.userData;
    }
//    changeMessage(message: string) {
//     this.messageSource.next(message)
//   }

}
