import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.components';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
