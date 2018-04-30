import {Injectable} from '@angular/core';
import {AppData} from '../models/AppData';
import {UserData} from '../models/UserData';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import {AppUsers} from '../models/AppUsers';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { JwtService } from './jwtStorage.service';
import { Observable } from 'rxjs/Observable';

import { AppDataService } from './AppDataService';

@Injectable()
export class UserdataService {
  private currentUserSubject = new BehaviorSubject<UserData>({} as UserData);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
  index :number ;
  constructor (
    private appService: AppDataService,
    private jwtService: JwtService
  ) {}

  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  populate(user : UserData) {
    // If JWT detected, attempt to get & store user's info
    if (user) {
        this.appService.userData.push(user);
        this.setAuth(user);
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }

  setAuth(user: UserData) {
    // Save JWT sent from server in localstorage
    this.jwtService.saveToken(user.token);
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next({} as UserData);
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }

  attemptAuth(type, credentials) : number {
  const route = (type === 'login') ? '/login' : '';
  this.index= this.appService.getUserDetails().findIndex(i=>i.userName==credentials.email && i.password==credentials.password);
  if(this.index>=0)    
      {
      this.setAuth(this.appService.getUserDetails()[this.index]);
      return this.index ;
      }
  }

  getCurrentUser(): UserData {
    return this.currentUserSubject.value;
  }

  // // Update the user on the server (email, pass, etc)
  // update(user): Observable<UserData> {
  //   return this.apiService
  //   .put('/user', { user })
  //   .pipe(map(data => {
  //     // Update the currentUser observable
  //     this.currentUserSubject.next(data.user);
  //     return data.user;
  //   }));
  }
    

