import { Go } from './go';
import { Usuario } from './usuario';

export interface Mensaje {
    Emisor:string;
    Receptor:string;
    Texto:string;
    Date:string;
    Deleted:boolean;
}
