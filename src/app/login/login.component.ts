import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  registeredUsers = [];
  user = {
    email: '',
    password: ''
  }
  validLogin = false;
  showInvalidMessage = false;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    this.user.email = this.loginForm.value.email;
    this.user.password = this.loginForm.value.password;
    console.log(this.user.email);

    this.registeredUsers = this.usersService.getUsers();
    for(var i = 0; i < this.registeredUsers.length; i++){
            if(this.registeredUsers[i].email === this.user.email &&
              this.registeredUsers[i].password === this.user.password){
                this.validLogin = true;
                this.showInvalidMessage = false;
            }else{
              this.validLogin = false;
              this.showInvalidMessage = true;
            }
            
    }
    console.log(this.validLogin);
  }

}
