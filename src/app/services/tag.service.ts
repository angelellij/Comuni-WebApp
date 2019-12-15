import { Injectable } from '@angular/core';
import { inherits } from 'util';
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
    return this.http.get(this.url,{ 
      params: {"espacio":JSON.stringify(espacio)},
      headers: new RestApiService().httpOptionsJson
    });
  }

  public post(tag:Tag){
    return this.http.post(this.url, tag, new RestApiService().httpOptions);
  }
}
