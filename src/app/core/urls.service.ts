import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlsService {
  public get apiUrl() {
    return 'http://localhost:5000/';   //https://bankwire-api.herokuapp.com/ http://localhost:5000/ https://api.bankwire.org/
  }
  constructor() { }
}
