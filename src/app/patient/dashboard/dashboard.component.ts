import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class DashboardComponent implements OnInit {
  appointmentForm!: FormGroup;
  currentStep = 1;
  availableSlots = ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Initialize appointmentForm inside ngOnInit to make sure 'fb' is ready
    this.appointmentForm = this.fb.group({
      specialization: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  // Move to the next step
  nextStep(): void {
    if (this.appointmentForm.valid) {
      this.currentStep++;
    }
  }

  // Move to the previous step
  previousStep(): void {
    this.currentStep--;
  }

  // Handle form submission
  onSubmit(): void {
    if (this.appointmentForm.valid) {
      const appointmentData = this.appointmentForm.value;
      console.log('Appointment booked with data:', appointmentData);
    }
  }
}
