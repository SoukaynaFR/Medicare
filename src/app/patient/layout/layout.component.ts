import { Component ,HostListener} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  imports: [CommonModule, RouterOutlet],

})
export class LayoutComponent {
  notifications: string[] = ['Appointment confirmed', 'Reminder: Check-in tomorrow'];
  showNotifications = false;
  showProfile = false;
patientName: any;
  router: any;

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
    this.showProfile = false; // Close profile if open
  }
// Close notifications when clicking outside
@HostListener('document:click', ['$event'])
onClickOutside(event: MouseEvent) {
  const clickedElement = event.target as HTMLElement;
  if (!clickedElement.closest('.notification-bell') && !clickedElement.closest('.notifications-dropdown')) {
    this.showNotifications = false;
  }
}
  toggleProfile() {
    this.showProfile = !this.showProfile;
    this.showNotifications = false; // Close notifications if open
  }

  navigateToProfile() {
    this.router.navigate(['/profile']); // Navigate to the profile component
  }


  logout() {
    console.log('Logout clicked');
    // Add logout logic here
  }
}
