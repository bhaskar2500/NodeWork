import {Injectable} from '@angular/core';
import {AppData} from './AppData';

@Injectable()
export class AppDataService {

    constructor() {}

    getApplicationDetails() {
        
        return [{"appID":1,"owner":"SP+", "appName":"Parking"},
                {"appID":2,"owner":"Microsoft+", "appName":"OneDrive"},
                {"appID":3,"owner":"Google+", "appName":"GSuite"},
                {"appID":4,"owner":"DeloitteSP+", "appName":"Audit CRM"},
                {"appID":5,"owner":"Prolifics", "appName":"BA-60"},]
    }

    getUserDetails() {
        
        return {"1":[{"userID":101,"userName":"Bhaskar","date":"1/2/2017"}] ,
                 "2":[{"userID":102,"userName":"Ishan",  "date":"1/3/2017"}] ,
                 "3":[{"userID":103,"userName":"Divya",  "date":"1/4/2017"}] }
    }
}
