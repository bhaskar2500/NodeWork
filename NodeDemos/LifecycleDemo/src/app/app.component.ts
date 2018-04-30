import { Component,OnInit,HostListener,SimpleChanges } from '@angular/core';
import { AppOwnerDetails } from './OwnerDetails/AppOwnerDetails.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 srcElements =[];
 textElements=[];
  
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    this.textElements.push(event.key);
  }
 
  title = 'app';
  addSourceElements(){
    this.srcElements.push({"name":"server1",'content':"this is the ownercomponent pushed by parent ","type":"parent"});
  }

   onDestroyFirst(){
     this.srcElements.splice(0,1);
   }
    ngOnInit() {
      console.log("called OnInit By parent");
    }
     ngAfterViewInit(){
      console.log("called Parent-ngAfterViewInit");
    }
    ngAfterViewChecked(){
      console.log("called Parent-ngAfterViewChecked");
    }
     ngDoCheck(){
      console.log("called  Parent-DoCheck");
    }
    ngAfterContentInit(){
      console.log("called  Parent-ngAfterContentInit");
    }
    ngAfterContentCheck(){
      console.log("called Parent-ngAfterContentCheck");
    }
}
