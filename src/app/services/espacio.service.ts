import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestApiService } from './rest-api.service';
import { Espacio } from '../models/espacio';
import { isNullOrUndefined } from 'util';
import { Go } from '../models/go';

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

  public put(espacio:Go<Espacio>){
    return this.http.put(this.url, espacio, new RestApiService().httpOptions);
  }

  public delete(espacio:Go<Espacio>){
    var url = this.espacioToString(espacio);
    url = "Espacios/" + url;
    return this.http.delete(this.url, { 
      params: {"url":url},
      headers: new RestApiService().httpOptionsJson
    });
  }

  espacioToString(espacio:Go<Espacio>){
  var espacioUrl:string;
     if(isNullOrUndefined(espacio.Object.UrlEspacio)){
       espacioUrl = espacio.Key;
     }
     else{
        espacioUrl = espacio.Object.UrlEspacio + "/" + espacio.Key;
     }
     return espacioUrl.replace("/","-");
    }
}
