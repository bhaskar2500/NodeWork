import {Component
      ,OnInit
      ,SimpleChanges
      ,OnChanges
      ,DoCheck
      ,AfterContentInit
      , AfterContentChecked
      , AfterViewInit
      ,AfterViewChecked
      , OnDestroy,Input} from '@angular/core';
import {AppData} from '../../../AppData';
import {AppDataService} from '../../../AppDataService';


@Component({
  selector: 'appOwner',
  styleUrls: ['./AppOwnerDetails.css'],
  templateUrl: './AppOwnerDetails.html'
})

export class AppOwnerDetails implements OnInit,OnChanges {
   @Input('srcElement') element: {type:string ,name:string,content:string};
   @Input('name') name: String;
   
    appData: AppData[];
    constructor(private service: AppDataService) { }

    ngOnInit() {
      console.log("called OnInitChild");
      this.appData = this.service.getApplicationDetails();
      console.log(this.name);
    }
    ngOnChanges(changes :SimpleChanges){
      console.log("called Child-OnChanges");
      console.log(changes);
    }
    ngDoCheck(){
      console.log("called Child-DoCheck");
    }
    ngAfterContentInit(){
      console.log("called Child-ngAfterContentInit");
    }
    ngAfterContentCheck(){
      console.log("called Child-ngAfterContentCheck");
    }
    ngAfterViewInit(){
      console.log("called Child-ngAfterViewInit");
    }
    ngAfterViewChecked(){
      console.log("called Child-ngAfterViewChecked");
    
  }
   ngOnDestroy(){
     console.log("destroyed");
   }
  
}