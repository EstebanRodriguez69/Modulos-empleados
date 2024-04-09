import { Component, OnInit } from '@angular/core';
/* se agrego el modulo NGForm de angular se utiliza para trabajar con formularios en plantillas 
HTML y manejar la interacción del usuario con los datos del formulario en componentes de Angular */
import { NgForm } from '@angular/forms';

import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/empleado';



@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css',
  providers: [EmpleadoService]
})
export class EmpleadosComponent implements OnInit {

  constructor(public empleadoService: EmpleadoService) { }

  ngOnInit() {
  }

  resetForm(form?: NgForm){
    if (form) {
      form.reset();
      this.empleadoService.selectedEmpleado = new Empleado()
    }
  }

  addEmpleado(form: NgForm) {
    this.empleadoService.postEmpleado(form.value)
    .subscribe(res => {
      console.log(res);
    });
  }
  
}
