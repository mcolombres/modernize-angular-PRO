export interface Sesion {
    _id?:string;
    anio?:number;
    numero?:number;
    tipoSesion?: string;
    fechaHoraInicio?:Date;
    fechaHoraInicioFormatted?: string;// Agregamos un nuevo campo para transformar la fecha y mostrarla correctamente
}
