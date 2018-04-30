import { Routes } from '@angular/router';

import { AppOwnerDetails } from '../app/OwnerDetails/AppOwnerDetails.component';
import { UserDetails } from '../app/UserDetails/UserDetails.component';
import { AuthComponent } from '../app/AuthComponent/auth.component' ;
import { NoAuthGuard } from './AuthComponent/no-auth-guard.service';


export const rootRouterConfig: Routes = [
  { path: 'Owner', component: AppOwnerDetails },
  { path: 'Owner/:id', component: UserDetails, },
  { path: 'logOut',component:AuthComponent,pathMatch: 'full' },
  {path: '',redirectTo: "login" ,pathMatch: 'full' },
  {
    path: 'login',
    component: AuthComponent,
  },
  {
    path: 'register',
    component: AuthComponent,
    canActivate:[NoAuthGuard]
  },
  {
    path: 'OrigAuth',
    component: AuthComponent,
    canActivate: [NoAuthGuard]
  },
];
