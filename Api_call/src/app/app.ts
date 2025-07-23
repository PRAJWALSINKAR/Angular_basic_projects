import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './service/products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Api_call');
productList: any;


  constructor(private product : Products) {
    
  }
  ngOnInit() {
    this.product.grtProductList().subscribe((data : any) =>{
       console.log(data);
       this.productList = data;
    })
  }
}
