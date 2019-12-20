import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpHeaders } from '@angular/common/http';
import { Espacio } from '../models/espacio';
import { Go } from '../models/go';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  readonly httpOptionsJson = {
      "Access-Control-Allow-Origin": "*",
      'Accept': 'application/json',
      "Content-Type":"application/json",
      "cache-control": "no-cache"
  }

  readonly httpOptions = {
    headers: new HttpHeaders(
      this.httpOptionsJson
    )
  };
  readonly RestApiUrl: string = "http://localhost:50115/api";

  constructor() { }

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
