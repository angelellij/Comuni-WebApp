import { Injectable } from '@angular/core';
import { inherits } from 'util';
import { RestApiService } from './rest-api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private url:string;
  private http:HttpClient;

  constructor() {
    this.url = new RestApiService().RestApiUrl + "/tag/";
   }

   public getAll():Observable<Tag>{
   if(this.http.get<Tag>(this.url) ==null){
      return new Observable<Tag>();
    }
    return this.http.get<Tag>(this.url);
  }
}
