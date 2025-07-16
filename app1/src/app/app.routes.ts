import { Routes } from '@angular/router';

export const routes: Routes = [
  // Example
   { path: 'greet', loadComponent: () => import('./greet/greet').then(m => m.GreetComponent) }
];
