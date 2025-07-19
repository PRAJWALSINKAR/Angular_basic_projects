import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Get_Set_Inputs');
    name = '';
  displayName = '';
  email = '';

  getName(event: any) {
    this.name = event.target.value;
  }

  showName() {
    this.displayName = this.name;
  }

  setName() {
    this.name = 'Prajwal';
  }

  getEmail(emailValue: string) {
    this.email = emailValue;
  }
}
