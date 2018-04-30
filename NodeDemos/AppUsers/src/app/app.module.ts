import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';     //accordion and accordion tab
import { AuthModule } from '../app/AuthComponent/auth.module';

import { rootRouterConfig } from './app.routes';

import { AppComponent } from './app.component';
import { AppOwnerDetails } from '../app/OwnerDetails/AppOwnerDetails.component';
import { UserDetails } from '../app/UserDetails/UserDetails.component';
import { AuthComponent } from '../app/AuthComponent/auth.component' ;

import { AppDataService } from './shared/services/AppDataService';
import { UserdataService } from './shared/services/userData.service';
import { JwtService } from './shared/services/jwtStorage.service';

import { FooterComponent,HeaderComponent } from './shared/layout/';
import { ShowAuthedDirective } from './shared/show-authed.directive';

import { NoAuthGuard } from './AuthComponent/no-auth-guard.service';



@NgModule({
  declarations: [
     AppComponent
    ,AuthComponent
    ,AppOwnerDetails
    ,UserDetails
    ,ShowAuthedDirective,
    FooterComponent,HeaderComponent
  ],
  imports: [
    BrowserModule
    ,RouterModule.forRoot(rootRouterConfig, { useHash: true })
    ,TableModule
    ,ButtonModule
    ,FormsModule,ReactiveFormsModule,
    CommonModule
  ],
  providers: [AppDataService,UserdataService,JwtService,NoAuthGuard],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
