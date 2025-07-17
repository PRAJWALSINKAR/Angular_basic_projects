import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import this

@Component({
  selector: 'app-iff',
  standalone: true, // ✅ if you're using standalone component
  imports: [CommonModule], // ✅ Add CommonModule here
  templateUrl: './iff.html',
  styleUrls: ['./iff.css']
})
export class Iff {

  marks:number = 0;
  status:boolean = false;

  constructor(){
    if(this.marks >= 35){
      this.status = true;
    }else{
      this.status=false;
    }
  }
}
