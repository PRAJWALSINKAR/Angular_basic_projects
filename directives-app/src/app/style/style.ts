import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-style',
  imports: [],
  templateUrl: './style.html',
  styleUrl: './style.css'
})
export class Style {
  // styles
  marks : number =70;
  mycolor : string ="";
  constructor(){
    if(this.marks >= 35){
      this.mycolor = "green";
    }
    else{
      this.mycolor = "red";
    }
  }
}
