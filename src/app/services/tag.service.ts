import { Injectable } from '@angular/core';
import { inherits, isNullOrUndefined } from 'util';
import { RestApiService } from './rest-api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from '../models/tag';
import { Espacio } from '../models/espacio';
import { Go } from '../models/go';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private url:string;

  constructor(private http:HttpClient) {
    this.url = new RestApiService().RestApiUrl + "/Tags";
   }

   public getAll(espacio:Go<Espacio>){
     var espacioUrl = this.espacioToString(espacio);
    return this.http.get(this.url,{ 
      params: {"espacioUrl":espacioUrl},
      headers: new RestApiService().httpOptionsJson
    });
  }

  public post(tag:Tag){
    return this.http.post(this.url, tag, new RestApiService().httpOptions);
  }

  public put(tag:Go<Tag>){
    return this.http.put(this.url, tag, new RestApiService().httpOptions);
  }

  public delete(tag:Go<Tag>, espacio:Go<Espacio>){
    var url = this.espacioToString(espacio);
    url = "Espacios/" + url + "/Tags/" + tag.Key; 
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
