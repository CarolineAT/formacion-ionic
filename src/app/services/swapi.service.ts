import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { String } from 'typescript-string-operations';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  private url: string;
  private headers = new HttpHeaders();

  constructor(private _http: HttpClient) {
    this.url = 'https://swapi.dev/api';
   }

   getPlanets(){
     
    let serviceURL =  String.Format('{0}/planets', this.url);
    return this._http.get(serviceURL, { headers: this.headers});
  }
}
