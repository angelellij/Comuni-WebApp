import { Espacio } from './espacio';
import { Usuario } from './usuario';
import { Go } from './go';
import { Tag } from './tag';

export class Post {
    private Espacio:Go<Espacio>;
    private Usuario:Go<Usuario>;
    private Titulo:string;
    private Descripcion:string;
    private Tag:Go<Tag>;
    private Date:string;
    private Deleted:boolean;

    constructor(){ }

    /**
     * Getter $Espacio
     * @return {Go<Espacio>}
     */
	public get $Espacio(): Go<Espacio> {
		return this.Espacio;
	}

    /**
     * Getter $Usuario
     * @return {Go<Usuario>}
     */
	public get $Usuario(): Go<Usuario> {
		return this.Usuario;
	}

    /**
     * Getter $Titulo
     * @return {string}
     */
	public get $Titulo(): string {
		return this.Titulo;
	}

    /**
     * Getter $Descripcion
     * @return {string}
     */
	public get $Descripcion(): string {
		return this.Descripcion;
	}

    /**
     * Getter $Tag
     * @return {Go<Tag>}
     */
	public get $Tag(): Go<Tag> {
		return this.Tag;
	}

    /**
     * Getter $Date
     * @return {string}
     */
	public get $Date(): string {
		return this.Date;
	}

    /**
     * Getter $Deleted
     * @return {boolean}
     */
	public get $Deleted(): boolean {
		return this.Deleted;
	}

    /**
     * Setter $Espacio
     * @param {Go<Espacio>} value
     */
	public set $Espacio(value: Go<Espacio>) {
		this.Espacio = value;
	}

    /**
     * Setter $Usuario
     * @param {Go<Usuario>} value
     */
	public set $Usuario(value: Go<Usuario>) {
		this.Usuario = value;
	}

    /**
     * Setter $Titulo
     * @param {string} value
     */
	public set $Titulo(value: string) {
		this.Titulo = value;
	}

    /**
     * Setter $Descripcion
     * @param {string} value
     */
	public set $Descripcion(value: string) {
		this.Descripcion = value;
	}

    /**
     * Setter $Tag
     * @param {Go<Tag>} value
     */
	public set $Tag(value: Go<Tag>) {
		this.Tag = value;
	}

    /**
     * Setter $Date
     * @param {string} value
     */
	public set $Date(value: string) {
		this.Date = value;
	}

    /**
     * Setter $Deleted
     * @param {boolean} value
     */
	public set $Deleted(value: boolean) {
		this.Deleted = value;
	}

    
}
