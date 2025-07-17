import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Welcome {
msg : string ="";

   getWelcomeMsg(): string {
     this.msg = "welcome to my app...";
    return this.msg;
    
  }
}
