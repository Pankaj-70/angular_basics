import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ProductService } from './product-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('routing-tutorials');
  appProducts: string[]=[];
  constructor(private prodServiceObj: ProductService) {}
  ngOnInit() {
    this.appProducts = this.prodServiceObj.getProducts();
  }
}
