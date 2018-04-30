import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth.component';
import { NoAuthGuard } from './no-auth-guard.service';

const authRouting: ModuleWithProviders = RouterModule.forRoot([
  {
    path: 'login',
    component: AuthComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'register',
    component: AuthComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'OrigAuth',
    component: AuthComponent,
    canActivate: [NoAuthGuard]
  },
]);

@NgModule({
  imports: [
    authRouting,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  declarations: [
    AuthComponent
  ],
exports:[AuthComponent,RouterModule],
  
  providers: [
    NoAuthGuard
  ]
})
export class AuthModule {}
