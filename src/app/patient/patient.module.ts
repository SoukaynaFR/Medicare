import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentsComponent } from './appointments/appointments.component';

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    RouterModule, // Required for router-outlet
    RouterModule.forChild([]), // In case child routing is used
    LayoutComponent,
    DashboardComponent,
    AppointmentsComponent,
  ],
})
export class PatientModule {}


