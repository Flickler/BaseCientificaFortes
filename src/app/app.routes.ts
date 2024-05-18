import { Routes } from '@angular/router';

import { HomeComponent } from '@Pages/home.component';
import { LoginComponent } from '@Pages/login.component';
import { ManagementComponent } from '@Pages/management.component';
import { canActivateManagement } from '@Guards/can-activate-management.guard';
import { RegisterComponent } from '@Pages/register.component';
import { AgendComponent } from '@Pages/agend.component';

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
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'management',
    component: ManagementComponent,
  },
  {
    path: 'agend',
    component: AgendComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
