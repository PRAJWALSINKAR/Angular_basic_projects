import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  username : string="";
  password : string="";
  msg : string="";

   CheakLogin(){
    if(this.username=="admin" && this.password=="admin123"){
      this.msg="valid credentials";
    }
    else{
      this.msg="invalid";
    }
   }

}
