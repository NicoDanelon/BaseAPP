/// <reference types="@angular/localize" />

import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './routes';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, NgbModule),
    provideAnimations(),
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));
