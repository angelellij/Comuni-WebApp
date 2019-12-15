import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RestApiService } from './rest-api.service';
import { Usuario } from '../models/usuario';
import { Go } from '../models/go';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url:string;

  constructor(private http:HttpClient) {
    this.url = new RestApiService().RestApiUrl + "/Usuarios";
   }

   public getAll(){ 
    return this.http.get(this.url, new RestApiService().httpOptions);
  }
  public post(usuario:Usuario){
    return this.http.post(this.url, usuario, new RestApiService().httpOptions);
  }
}
