import { Injectable } from '@angular/core';
/* Esta funcionalidad permite la comunicación con servicios web externos para obtener datos, 
enviar datos o realizar otras operaciones basadas en HTTP. */
import { HttpClient } from '@angular/common/http';
import { Empleado } from "../models/empleado";
import e from 'express';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  selectedEmpleado!: Empleado; 
  empleados!: Empleado[];

  readonly URL_API = 'http://localhost:3000/api/empleados';
  readonly URL_APIs = 'http://localhost:3000/api/empleado';


  constructor(private http: HttpClient) {
    this.selectedEmpleado = new Empleado();

  }

  getEmpleados(){
    return this.http.get(this.URL_API);
  }

  postEmpleado(Empleado: Empleado){
    return this.http.post(this.URL_APIs, Empleado);
  }

  putEmpleado(Empleado: Empleado){
    return this.http.put(this.URL_APIs + `/${Empleado._id}`, Empleado);
  }

  deleteEmpleado(_id: String){
    return this.http.delete(this.URL_APIs + `/${_id}` );
  }

}
