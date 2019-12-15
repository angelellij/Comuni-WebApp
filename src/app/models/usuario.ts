import { Espacio } from './espacio';

export interface Usuario {
    Nombre:string;
    Apellido:string;
    Email:string;
    Contrasena:string;
    FNacimiento:string;
    UrlFoto:string;
    EspaciosAdministrador:Map<string,Espacio>;
    EspaciosMiembro:Map<string,Espacio>;
    TimestampUtc:string;
}
