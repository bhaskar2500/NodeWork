import { Routes } from '@angular/router';

import { AppOwnerDetails } from '../app/OwnerDetails/AppOwnerDetails.component';
import { UserDetails } from '../app/UserDetails/UserDetails.component';


export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'app-root', pathMatch: 'full' },
  { path: 'Owner', component: AppOwnerDetails },
  { path: 'Owner/:id', component: UserDetails },
];
