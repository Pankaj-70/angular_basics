import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ProductService } from './product-service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('routing-tutorials');
  
  appProducts: string[]=[];
  httpUsers: any = []; 
  constructor(private prodServiceObj: ProductService) {}
  ngOnInit() {
    this.appProducts = this.prodServiceObj.getProducts();
    this.prodServiceObj.getHttpProducts().subscribe((data) => {
      this.httpUsers = data;
    });
  } 
}
