import { Component } from '@angular/core';
import { Product } from './services/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.html'
})
export class App{
  products: any[] = [];

  constructor(private product: Product) {}

  ngOnInit() {
    this.products = this.product.getProductData();
  }
}
 