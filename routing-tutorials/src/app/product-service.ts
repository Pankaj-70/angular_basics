import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  products = ['Sprinkler', 'Socket', 'Obese'];
  getProducts() {
    return this.products;
  }

  getHttpProducts() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
