import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.snackBar.open('Please fill in all required fields.', 'Close', {
        duration: 3000,
        panelClass: ['snackbar-error'],
      });
      return;
    }

    const payload = this.loginForm.value;

    this.http.post('https://backend-url.com/login', payload).subscribe({
      next: () => {
        this.snackBar.open('Login successful!', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-success'],
        });
      },
      error: (err) => {
        const errorMessage = err.error.message || 'Login failed. Please try again.';
        this.snackBar.open(errorMessage, 'Close', {
          duration: 3000,
          panelClass: ['snackbar-error'],
        });
      },
    });
  }
}
