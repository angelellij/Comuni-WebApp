import { Post } from './post';
import { Go } from './go';
import { Usuario } from './usuario';

export interface Comentario {
    
    Post:Go<Post>;
    Usuario:Go<Usuario>; 
    Texto:string;
    Date:string;
    Deleted:boolean;

}
