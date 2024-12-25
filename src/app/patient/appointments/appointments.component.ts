import { Component, OnInit } from '@angular/core';
import { AppointmentsService, Appointment } from '../appointments.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class AppointmentsComponent implements OnInit {
  appointments: Appointment[] = []; // Explicitly declare the type

  constructor(private appointmentsService: AppointmentsService) {}

  ngOnInit() {
    this.appointments = this.appointmentsService.getAppointments();
  }
}
