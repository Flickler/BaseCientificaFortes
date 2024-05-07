import { Routes } from '@angular/router';

import { HomeComponent } from '@Pages/home.component';
import { LoginComponent } from '@Pages/login.component';
import { ManagementComponent } from '@Pages/management.component';
import { canActivateManagement } from '@Guards/can-activate-management.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: [canActivateManagement],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'management',
    component: ManagementComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
