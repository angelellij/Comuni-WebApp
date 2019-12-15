import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestApiService } from './rest-api.service';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url:string;

  constructor(private http:HttpClient) {
    this.url = new RestApiService().RestApiUrl + "/Login";
   }

   public getAll(){ 
    return this.http.get(this.url, new RestApiService().httpOptions);
  }
  public register(usuario:Usuario){
    return this.http.post(this.url, usuario, new RestApiService().httpOptions);
  }
  public login(usuario:Usuario){
    return this.http.post(this.url, usuario, new RestApiService().httpOptions);
  }

}
