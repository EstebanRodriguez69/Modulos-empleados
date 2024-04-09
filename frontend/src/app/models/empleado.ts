export class Empleado {
    
    
    constructor(_id = '', documento = 0, nombre = '', contrasenia = '', cargo = '') {
        this._id = _id;
        this.documento = documento;
        this.nombre = nombre;
        this.contrasenia = contrasenia;
        this.cargo = cargo;
    }
    
    _id: string;
    documento: number;
    nombre: string;
    contrasenia: string;
    cargo: string;

}
