import { Routes } from '@angular/router';
import { HomeComponent } from '../app/component/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },           // Default route → HomeComponent
  { path: 'home', component: HomeComponent },       // Explicit /home route
  { path: '**', redirectTo: '' }                   // Wildcard → redirect to home
];
