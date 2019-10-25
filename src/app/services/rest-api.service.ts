import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  RestApiUrl: string = "https://localhost:44310/api";

  constructor() { }
}
