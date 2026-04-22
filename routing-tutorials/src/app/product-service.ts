import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = ['Sprinkler', 'Socket', 'Obese'];
  getProducts() {
    return this.products;
  }
}
