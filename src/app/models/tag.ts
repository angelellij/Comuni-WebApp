export class Tag {
    private id:string;
    private Espacio:string;
    private nombre:string;
    private colorLetra:string;
    private colorBackground:string;

	constructor() {
	}

    /**
     * Getter $id
     * @return {string}
     */
	public get $id(): string {
		return this.id;
	}

    /**
     * Getter $Espacio
     * @return {string}
     */
	public get $Espacio(): string {
		return this.Espacio;
	}

    /**
     * Getter $nombre
     * @return {string}
     */
	public get $nombre(): string {
		return this.nombre;
	}

    /**
     * Getter $colorLetra
     * @return {string}
     */
	public get $colorLetra(): string {
		return this.colorLetra;
	}

    /**
     * Getter $colorBackground
     * @return {string}
     */
	public get $colorBackground(): string {
		return this.colorBackground;
	}

    /**
     * Setter $id
     * @param {string} value
     */
	public set $id(value: string) {
		this.id = value;
	}

    /**
     * Setter $Espacio
     * @param {string} value
     */
	public set $Espacio(value: string) {
		this.Espacio = value;
	}

    /**
     * Setter $nombre
     * @param {string} value
     */
	public set $nombre(value: string) {
		this.nombre = value;
	}

    /**
     * Setter $colorLetra
     * @param {string} value
     */
	public set $colorLetra(value: string) {
		this.colorLetra = value;
	}

    /**
     * Setter $colorBackground
     * @param {string} value
     */
	public set $colorBackground(value: string) {
		this.colorBackground = value;
	}
    

    
}
