import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-iff',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './iff.html'
})
export class Iff {
  marks: number = 0;
  status: boolean = false;
  block: number = 0;

  constructor(private cdr: ChangeDetectorRef) {
    this.status = this.marks >= 35;
  }

  update() {
    this.block = (this.block + 1) % 4; // 0 -> 1 -> 2 -> 3 -> 0 ...
    console.log('Block updated:', this.block);

    // ✅ Manually trigger change detection
    this.cdr.detectChanges();
  }
}
