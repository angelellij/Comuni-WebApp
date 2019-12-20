import { Espacio } from './espacio';
import { Usuario } from './usuario';
import { Go } from './go';
import { Tag } from './tag';

export interface Post {
    Espacio:Go<Espacio>;
    Usuario:Go<Usuario>;
    Titulo:string;
    Descripcion:string;
    Tag:Go<Tag>;
    Date:string;
    Deleted:boolean;
}
