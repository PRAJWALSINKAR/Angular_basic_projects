import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Style } from "./style/style";
import { Claz } from "./claz/claz";
import { Iff } from "./iff/iff";
import { NgFor } from "./ng-for/ng-for";
import { NgfirObj } from "./ngfir-obj/ngfir-obj";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Style, Claz, Iff, NgFor, NgfirObj],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('directives-app');
}
