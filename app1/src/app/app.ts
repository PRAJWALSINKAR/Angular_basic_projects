import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Greet} from './greet/greet'; 
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule], // ✅ Don't forget this
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  name:string ="smith";
  age:number = 25;

  handleSubmitBtn(){
    this.name = "john";
    this.age = 30;
  }

}
