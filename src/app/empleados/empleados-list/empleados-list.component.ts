import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { TurnosService, Turno } from '../../turnos/turnos.service';

@Component({
  selector: 'app-empleados-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleados-list.component.html',
  styleUrls: ['./empleados-list.component.css'],
})
export class EmpleadosListComponent implements OnInit {

  empleados = [
    { id: 1, nombre: 'Juan Pérez' },
    { id: 2, nombre: 'María Gómez' },
  ];

  turnosPorEmpleado: { [key: number]: Turno[] } = {};

  constructor(
    private authService: AuthService,
    private router: Router,
    private turnosService: TurnosService
  ) {}

  ngOnInit(): void {
    this.empleados.forEach(emp => {
      this.turnosPorEmpleado[emp.id] =
        this.turnosService.obtenerTurnosPorEmpleado(emp.id);
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  asignarTurno(id: number) {
    this.router.navigate(['/asignar-turno', id]);
  }
}
