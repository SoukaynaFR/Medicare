import { Routes } from '@angular/router';
import { LayoutComponent } from './patient/layout/layout.component';
import { ProfileComponent } from './patient/profile/profile.component';

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
  { path: '', redirectTo: '/patient/dashboard', pathMatch: 'full' },
];


// export const routes: Routes = [
//   { path: 'patient/dashboard', component: DashboardComponent },
//   { path: 'patient/appointments', component: AppointmentsComponent },
//   { path: '', redirectTo: '/patient/dashboard', pathMatch: 'full' },  // Default route
// ];
