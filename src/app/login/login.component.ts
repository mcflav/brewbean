import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataStorageService } from '../services/data-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  users = [];

  login = {
    email: '',
    password: ''
   }
   firstname;
   lastname; 
   id;

  validLogin = false;
  showInvalidMessage = false;
  userValid = false;
  isLoading = false;
  error: string = null;

  constructor(private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private dataStorageService: DataStorageService) { }

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
      this.isLoading = true;
       this.login.email = this.loginForm.value.email;
       this.login.password = this.loginForm.value.password;
       this.dataStorageService.validateUser({email: this.login.email, password: this.login.password})
          .subscribe(data => {
            this.isLoading = false;
            console.log(data.auth);
            this.error = null;
            this.isUserValid(data.auth);
          },
          errorMessage => {
            console.log(errorMessage.auth);
            if(errorMessage.auth === false){
              this.error = "Invalid email or password";
            } else {
              this.error = errorMessage;
            }            
            this.isLoading = false;
          });
  }

  isUserValid(isValid: boolean){
      this.userValid = isValid;
      if(this.userValid) {
          this.validLogin = true;
          this.showInvalidMessage = false;
          this.users = this.usersService.getUsers();
          for(var i = 0; i < this.users.length; i++){
              if(this.users[i].email === this.login.email) {
                console.log("id " + this.users[i]._id);
                  this.id = this.users[i]._id;
                  this.firstname = this.users[i].firstname;
                  this.lastname = this.users[i].lastname;
              }
          } 
         this.router.navigate(['../order-items', this.login.email, this.firstname, this.lastname, this.id], {relativeTo: this.route})
      }else{
          this.validLogin = false;
          this.showInvalidMessage = true;
      }
  }
}
