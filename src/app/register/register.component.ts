import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataStorageService } from '../services/data-storage.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @ViewChild('f') registerForm: NgForm;
  passMatch = true;
  user = {
    email: '',
    password: '',
    confirmPassword: '',
    firstname: '',
    lastname: ''
  }
  registeredUsers = [];
  registeredUser: {email: string, firstname: string, lastname: string, password: string };
  emailExsist = false;
  error: string = null;
    

   constructor(private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService) {}

   ngOnInit(): void {
    this.dataStorageService.fetchUsers()
      .subscribe(data => {
        if(data !== null){
            this.usersService.setUsers(data);
        }       
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
      });
   }

   
  onSubmit(){
    this.user.password = this.registerForm.value.password;
    this.user.confirmPassword = this.registerForm.value.confirmPassword;
    this.user.email = this.registerForm.value.email;
    this.user.firstname = this.registerForm.value.firstname;
    this.user.lastname = this.registerForm.value.lastname;
    this.registeredUsers = this.usersService.getUsers();
    
    for(var i = 0; i < this.registeredUsers.length; i++){
          if(this.registeredUsers[i].email === this.user.email){
             this.emailExsist = true;
          }
    }
    console.log(this.emailExsist);
    
    if(this.user.password !== this.user.confirmPassword){
      this.passMatch = false;
    }else {
      this.passMatch = true;
    
        if(this.emailExsist === false) {
          this.usersService.addUser({email: this.user.email, firstname: this.user.firstname, lastname: this.user.lastname, password: this.user.password});
          this.dataStorageService.storeUser({email: this.user.email, firstname: this.user.firstname, lastname: this.user.lastname, password: this.user.password}).
            subscribe(
                data => {
                  console.log(data);
                  this.router.navigate(['../login'], {relativeTo: this.route});
                },
                errorMessage => {
                  console.log(errorMessage);
                  this.error = errorMessage;
                });
        }
    }    
  }
}
