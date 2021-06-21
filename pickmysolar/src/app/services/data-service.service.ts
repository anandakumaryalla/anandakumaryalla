import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private readonly http: HttpClient) { }

  url = 'https://6051b8b8fb49dc00175b6997.mockapi.io/api/products';
  // url = 'https://6051b8b8fb49dc00175b6997.mockapi.io/api/quotes';


  getProducts(obj: any): Observable <any> {
    return this.http.post(this.url, obj);
  }
}
