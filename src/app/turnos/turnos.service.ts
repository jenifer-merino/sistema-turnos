import { Injectable } from '@angular/core';

export interface Turno {
  empleadoId: number;
  fecha: string;
  horaInicio: string;
  horaFin: string;
}

@Injectable({
  providedIn: 'root'
})
export class TurnosService {

  private turnos: Turno[] = [];

  agregarTurno(turno: Turno) {
    this.turnos.push(turno);
  }

  obtenerTurnosPorEmpleado(empleadoId: number): Turno[] {
    return this.turnos.filter(t => t.empleadoId === empleadoId);
  }
}
