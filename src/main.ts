import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),                  // Pour configurer les routes
    provideHttpClient(),                    // Pour activer HttpClient
    importProvidersFrom(FormsModule,MatSnackBarModule), provideAnimationsAsync(),       // Ajouter FormsModule ici
  ],
}).catch((err) => console.error(err));
