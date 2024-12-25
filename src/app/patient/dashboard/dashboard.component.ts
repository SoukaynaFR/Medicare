import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppointmentsService } from '../appointments.service';
import { Router } from '@angular/router';  


interface Doctor {
  id: number;
  name: string;
  image: string;
}

interface Appointment {
  specialization: string;
  doctor: string;
  date: string;
  time: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class DashboardComponent {
  appointmentForm: FormGroup;
  specializations = [
    { value: 'general', label: 'Médecin généraliste' },
    { value: 'dentist', label: 'Dentiste' },
    { value: 'dermatologist', label: 'Dermatologue' },
  ];
  doctors: Doctor[] = [];
  selectedSpecializationLabel = '';
  appointments: Appointment[] = []; // Store booked appointments
  showAppointments = false; // Toggle between booking form and appointments list

  constructor(private fb: FormBuilder, private appointmentsService: AppointmentsService,private router: Router) {
    this.appointmentForm = this.fb.group({
      specialization: ['', Validators.required],
      doctor: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
    });
  }

  selectSpecialization(specialization: string) {
    this.appointmentForm.patchValue({ specialization });
    this.selectedSpecializationLabel = this.specializations.find(
      (spec) => spec.value === specialization
    )?.label || '';
    this.loadDoctorsBySpecialization(specialization);
  }

  loadDoctorsBySpecialization(specialization: string) {
    if (specialization === 'general') {
      this.doctors = [
        { id: 1, name: 'Dr. John Doe', image: 'doc1.png' },
        { id: 2, name: 'Dr. Jane Smith', image: 'doc2.png' },
      ];
    } else if (specialization === 'dentist') {
      this.doctors = [
        { id: 3, name: 'Dr. Alex Williams', image: 'doc3.png' },
        { id: 4, name: 'Dr. Emily Johnson', image: 'doc1.png' },
      ];
    } else if (specialization === 'dermatologist') {
      this.doctors = [
        { id: 5, name: 'Dr. Sarah Lee', image: 'doc4.png' },
        { id: 6, name: 'Dr. Michael Brown', image: 'doc2.png' },
      ];
    } else {
      this.doctors = [];
    }
  }

  selectDoctor(doctor: Doctor) {
    this.appointmentForm.patchValue({ doctor: doctor.id });
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      const newAppointment = this.appointmentForm.value;
      this.appointmentsService.addAppointment(newAppointment);
      console.log('Appointment booked successfully:', newAppointment);
      this.appointmentForm.reset();
    }
  }

  toggleAppointments() {
    this.showAppointments = !this.showAppointments;
  }


  navigateToAppointments() {
    this.router.navigate(['patient/appointments']);
  }
}
