import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component')
        .then(m => m.LoginComponent)
  },
  {
    path: 'empleados',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./empleados/empleados-list/empleados-list.component')
        .then(m => m.EmpleadosListComponent)
  },
  {
    path: 'asignar-turno/:id',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./turnos/asignar-turno/asignar-turno.component')
        .then(m => m.AsignarTurnoComponent)
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
