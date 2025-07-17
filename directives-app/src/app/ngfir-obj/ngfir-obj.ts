import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-ngfir-obj',
  standalone : true,
  imports: [CommonModule],
  templateUrl: './ngfir-obj.html',
  styleUrl: './ngfir-obj.css'
})
export class NgfirObj {
 emps:Employee[] = [
      new Employee(101,'ram', 10000),
      new Employee(102,'Gita', 1250),
      new Employee(103,'Rahim', 19000),
     ];
}
