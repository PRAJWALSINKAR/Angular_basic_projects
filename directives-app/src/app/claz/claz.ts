import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-claz',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './claz.html',
  styleUrls: ['./claz.css']
})
export class Claz {

  marks:number =30;
  myclass : string ="";

  constructor(){
  if(this.marks >= 70){
    this.myclass="class1";
  }else{
    this.myclass="class2";
  }
  }
}
