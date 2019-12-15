import { Usuario } from './usuario';

export interface Espacio {
    
    UrlEspacio:string;
    Nombre:string;
    Descripcion:string;
    Miembros:Map<string,Usuario>;
    Administradores:Usuario;
    Date:string;
    Deleted:boolean;

}
