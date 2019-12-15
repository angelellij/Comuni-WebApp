import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestApiService } from './rest-api.service';
import { Noticia } from '../models/noticia';
import { Comentario } from '../models/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private url:string;

  constructor(private http:HttpClient) {
    this.url = new RestApiService().RestApiUrl + "/Comentario";
   }

   public getAll(){ 
    return this.http.get(this.url, new RestApiService().httpOptions);
  }
  public post(comentario:Comentario){
    return this.http.post(this.url, comentario, new RestApiService().httpOptions);
  }
}
