import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @ViewChild('f') registerForm: NgForm;
  submitted = false;
  user = {
    email: '',
    firstname: '',
    lastname: ''
  }

  // constructor() { }

  // ngOnInit(): void {
  // }

  onSubmit(){
    this.submitted = true;
    this.user.email = this.registerForm.value.email;
    this.user.firstname = this.registerForm.value.firstname;
    this.user.lastname = this.registerForm.value.lastname;
    console.log(this.user.firstname);
  }

}
