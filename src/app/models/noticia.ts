import { Go } from './go';
import { Espacio } from './espacio';
import { Usuario } from './usuario';

export interface Noticia {

     Usuario:Go<Usuario>;
     Titulo:string;
     Descripcion:string;
     Date:string;
     Deleted:boolean;
}
