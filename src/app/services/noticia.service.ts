import { Injectable } from '@angular/core';
import { Noticia } from '../models/noticia';
import { HttpClient } from '@angular/common/http';
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  private url:string;

  constructor(private http:HttpClient) {
    this.url = new RestApiService().RestApiUrl + "/Noticias";
   }

  public getAll(){ 
    return this.http.get(this.url, new RestApiService().httpOptions);
  }
  public post(noticia:Noticia){
    return this.http.post(this.url, noticia, new RestApiService().httpOptions);
  }
}
