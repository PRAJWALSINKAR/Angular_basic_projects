import { Component, Inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Use this instead of BrowserModule
import { RouterOutlet } from '@angular/router';
import { Welcome } from './welcome';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ required for standalone component
  imports: [CommonModule], // ✅ FIXED: replaced BrowserModule
  providers: [Welcome],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // ✅ FIXED: should be styleUrls not styleUrl
})
export class App {
  welcomeMsg: string = "";

  constructor(@Inject(Welcome) private s: Welcome) {}

  getMsg() {
    this.welcomeMsg = this.s.getWelcomeMsg();
  }
}
