import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestApiService } from './rest-api.service';
import { Mensaje } from '../models/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  private url:string;

  constructor(private http:HttpClient) {
    this.url = new RestApiService().RestApiUrl + "/Mensajes";
   }

  public getAll(mensaje:Mensaje){ 
    return this.http.get(this.url,{
      params: {"usuarios":mensaje.Emisor + "-" + mensaje.Receptor},
      headers: new RestApiService().httpOptionsJson
    });
  }

  public post(mensaje:Mensaje){
    console.log(mensaje);
    return this.http.post(this.url, mensaje, new RestApiService().httpOptions);
  }
}
