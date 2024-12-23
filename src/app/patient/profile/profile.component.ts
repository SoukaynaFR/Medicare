import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  patientName = 'Ravad Nadam';
  patientEmail = 'ravad.nadam@example.com';

  updateProfile() {
    console.log('Profile updated with:', this.patientName, this.patientEmail);
    // Implement the logic to save the updated profile information (e.g., call to backend API)
  }
}
