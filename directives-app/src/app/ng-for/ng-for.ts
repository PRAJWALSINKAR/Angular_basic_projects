import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-ng-for',
  standalone : true,
  imports: [CommonModule],
  templateUrl: './ng-for.html',
  styleUrl: './ng-for.css'
})
export class NgFor {
     cities : string[] =['hyd' , 'banglore' , 'dehli' , 'pune'];
     ngOninit() : void{

     }
}
