import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {
  addEmpleado(empleadoForm: NgForm) {
    // Aquí irá la lógica para agregar un empleado
    console.log('Formulario enviado');
    console.log(empleadoForm.value); // Puedes acceder a los valores del formulario aquí
  }
}
