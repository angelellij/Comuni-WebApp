import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestApiService } from './rest-api.service';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url:string;

  constructor(private http:HttpClient) {
    this.url = new RestApiService().RestApiUrl + "/Mensaje";
   }

  public getAll(){ 
    return this.http.get(this.url, new RestApiService().httpOptions);
  }
  public post(post:Post){
    return this.http.post(this.url, post, new RestApiService().httpOptions);
  }
}
