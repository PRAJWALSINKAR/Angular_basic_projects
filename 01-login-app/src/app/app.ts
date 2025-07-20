import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule , NgIf],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
profileForm = new FormGroup({
  name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  password: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required, Validators.email])
});


  submitData() {
    console.log(this.profileForm.value);
  }
  get name() {
  return this.profileForm.get('name');
}
get password() {
  return this.profileForm.get('password');
}
get email() {
  return this.profileForm.get('email');
}
}
