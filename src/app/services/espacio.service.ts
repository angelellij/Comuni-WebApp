import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestApiService } from './rest-api.service';
import { Espacio } from '../models/espacio';

@Injectable({
  providedIn: 'root'
})
export class EspacioService {

  private url:string;

  constructor(private http:HttpClient) {
    this.url = new RestApiService().RestApiUrl + "/Espacios";
   }

  public getAll(idUsuario:string){ 
    return this.http.get(this.url, {
      params: {"id":"usuario"+idUsuario},
      headers: new RestApiService().httpOptionsJson
    });
  }
  public post(espacio:Espacio){
    console.log(this.url);
    return this.http.post(this.url, espacio, new RestApiService().httpOptions);
  }
}
