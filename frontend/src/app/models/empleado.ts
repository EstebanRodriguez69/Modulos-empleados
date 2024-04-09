export class Empleado {
    
    _id: string;
    documento: string;
    nombre: string;
    contrasenia: string;
    cargo: string;

    constructor(_id: string, documento: string, nombre: string, contrasenia: string, cargo: string) {
        this._id = _id;
        this.documento = documento;
        this.nombre = nombre;
        this.contrasenia = contrasenia;
        this.cargo = cargo;
    }


}
