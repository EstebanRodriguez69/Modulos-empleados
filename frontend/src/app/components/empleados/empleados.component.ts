import { Component } from '@angular/core';
/* se agrego el modulo NGForm de angular se utiliza para trabajar con formularios en plantillas 
HTML y manejar la interacción del usuario con los datos del formulario en componentes de Angular */
import { NgForm } from '@angular/forms';

import { EmpleadoService } from '../../services/empleado.service';



@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css',
  providers: [EmpleadoService]
})
export class EmpleadosComponent {

  constructor(public empleadoService: EmpleadoService) {

  }

  addEmpleado(empleadoForm: NgForm) {

    // Aquí irá la lógica para agregar un empleado
    console.log('Formulario enviado');
    console.log(empleadoForm.value); // Puedes acceder a los valores del formulario aquí

    if (this.empleadoService.selecteEmpleado) {
      this.empleadoService.selecteEmpleado.documento = empleadoForm.value.documento;
      this.empleadoService.selecteEmpleado.nombre = empleadoForm.value.nombre;
      this.empleadoService.selecteEmpleado.contrasenia = empleadoForm.value.contrasenia;
      this.empleadoService.selecteEmpleado.cargo = empleadoForm.value.cargo;

      // Lógica para agregar o actualizar el empleado en el servicio
      // Por ejemplo, puedes llamar a métodos como postEmpleado o putEmpleado
      this.empleadoService.putEmpleado(this.empleadoService.selecteEmpleado)
        .subscribe(res => {
          console.log('Empleado actualizado:', res);
        }, err => {
          console.error('Error al actualizar empleado:', err);
        });
    }
  }
}
