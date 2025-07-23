import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyConverterPipe } from "./pipe/currency-converter-pipe";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CurrencyConverterPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('customPipe');
   amount: number = 250;
}
