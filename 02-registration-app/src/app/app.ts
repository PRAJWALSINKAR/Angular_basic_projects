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
    username: string="";
    password: string=""; 
    confirmPassword: string="";
    gender:string="";
    country: string="";
    msg:string="";

     handelRegBtnClick(){
           //logic to rstore to db
           this.msg = "Registration Successful...."
            }

}
