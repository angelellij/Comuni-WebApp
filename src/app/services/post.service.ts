import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestApiService } from './rest-api.service';
import { Post } from '../models/post';
import { Go } from '../models/go';
import { Espacio } from '../models/espacio';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url:string;

  constructor(private http:HttpClient) {
    this.url = new RestApiService().RestApiUrl + "/Posts";
   }

   public getAll(espacio:Go<Espacio>){
    var espacioUrl = new RestApiService().espacioToString(espacio);
   return this.http.get(this.url,{ 
     params: {"espacioUrl":espacioUrl},
     headers: new RestApiService().httpOptionsJson
   });
 }
  public post(post:Post){
    return this.http.post(this.url, post, new RestApiService().httpOptions);
  }
}
