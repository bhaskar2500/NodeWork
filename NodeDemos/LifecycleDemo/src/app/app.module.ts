import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';

import { AppComponent } from './app.component';
import { AppOwnerDetails } from '../app/OwnerDetails/AppOwnerDetails.component';
import { UserDetails } from '../app/UserDetails/UserDetails.component';
import { AppDataService } from '../../AppDataService';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {TableModule} from 'primeng/table';     //accordion and accordion tab

@NgModule({
  declarations: [
     AppComponent
    ,AppOwnerDetails
    ,UserDetails
  ],
  imports: [
    BrowserModule
    ,RouterModule.forRoot(rootRouterConfig, { useHash: true })
    ,TableModule
    ,FormsModule
    ,ButtonModule
  ],
  providers: [AppDataService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
