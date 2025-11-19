import { Routes } from '@angular/router';
import { Landingpage } from './layout/landingpage/landingpage';
import { Dashboard } from './layout/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: Landingpage,   
  },
  {
    path: 'app',
    component: Dashboard,  
  },
  {
    path: '**',
    redirectTo: ''
  }
];