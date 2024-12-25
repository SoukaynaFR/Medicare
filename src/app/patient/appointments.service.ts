import { Injectable } from '@angular/core';

export interface Appointment {
  specialization: string;
  doctor: string;
  date: string;
  time: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  private appointments: Appointment[] = []; // Explicitly declare the type

  addAppointment(appointment: Appointment) {
    this.appointments.push(appointment);
  }

  getAppointments(): Appointment[] {
    return this.appointments;
  }
}
