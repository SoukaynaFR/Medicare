import { Routes } from '@angular/router';
import { LayoutComponent } from './patient/layout/layout.component';
import { ProfileComponent } from './patient/profile/profile.component'; // Import ProfileComponent
import { DashboardComponent } from './patient/dashboard/dashboard.component';


export const routes: Routes = [
  {
    path: 'patient',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./patient/dashboard/dashboard.component').then(m => m.DashboardComponent),
      },
      {
        path: 'appointments',
        loadComponent: () => import('./patient/appointments/appointments.component').then(m => m.AppointmentsComponent),
      },
    ],
  },
  { path: 'profile', component: ProfileComponent },

  { path: 'patient/dashboard', component: DashboardComponent },


  { path: '', redirectTo: '/patient/dashboard', pathMatch: 'full' },
];
