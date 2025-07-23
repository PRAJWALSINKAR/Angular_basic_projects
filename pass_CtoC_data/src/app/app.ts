import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from "./user/user";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pass_CtoC_data');
   userName: string = 'Anil Sidhu'; 
     onSelectUser(event: any) {
    this.userName = event.target.value;
  }
}
