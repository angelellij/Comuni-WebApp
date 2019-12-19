import { Usuario } from './usuario';
import { Go } from './go';

export interface Espacio {
    
    UrlEspacio:string;
    Nombre:string;
    Descripcion:string;
    Miembros:Array<Go<Usuario>>;
    Administradores:Array<Go<Usuario>>;
    Date:string;
    Deleted:boolean;

}
