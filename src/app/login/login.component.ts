import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

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
    password: '',
    firstname: '',
    lastname: ''
  }
  validLogin = false;
  showInvalidMessage = false;

  constructor(private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    this.user.email = this.loginForm.value.email;
    this.user.password = this.loginForm.value.password;
    
    this.registeredUsers = this.usersService.getUsers();
    for(var i = 0; i < this.registeredUsers.length; i++){
            if(this.registeredUsers[i].email === this.user.email &&
              this.registeredUsers[i].password === this.user.password){
                this.validLogin = true;
                this.showInvalidMessage = false;
                this.user.firstname = this.registeredUsers[i].firstname;
                this.user.lastname = this.registeredUsers[i].lastname;
                this.router.navigate(['../order-items', this.user.email, this.user.firstname, this.user.lastname], {relativeTo: this.route})
            }else{
              this.validLogin = false;
              this.showInvalidMessage = true;
            }
    }
    console.log(this.validLogin);
    console.log(this.showInvalidMessage);
  }

}
