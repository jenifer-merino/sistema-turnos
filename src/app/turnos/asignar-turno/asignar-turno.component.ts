import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TurnosService } from '../turnos.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-asignar-turno',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule  
  ],
  templateUrl: './asignar-turno.component.html',
  styleUrl: './asignar-turno.component.css'
})
export class AsignarTurnoComponent {

  turnoForm!: FormGroup;
  empleadoId!: number;
  mensajeExito = '';

constructor(
  private fb: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  private turnosService: TurnosService
) {}


  volver() {
  this.router.navigate(['/empleados']);
}


  ngOnInit() {
    this.empleadoId = Number(this.route.snapshot.paramMap.get('id'));

    this.turnoForm = this.fb.group({
      fecha: ['', Validators.required],
      horaInicio: ['', Validators.required],
      horaFin: ['', Validators.required]
    });
  }

guardarTurno() {
  this.mensajeExito = '';

  if (this.turnoForm.invalid) {
    this.turnoForm.markAllAsTouched();
    return;
  }

  const { fecha, horaInicio, horaFin } = this.turnoForm.value;

  if (horaFin <= horaInicio) {
    this.turnoForm.get('horaFin')?.setErrors({ horaInvalida: true });
    return;
  }

  this.turnosService.agregarTurno({
    empleadoId: this.empleadoId,
    fecha,
    horaInicio,
    horaFin
  });


  this.router.navigate(['/empleados']);
}

}
