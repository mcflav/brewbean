import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStorageService } from './services/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private dataStorageService: DataStorageService){}

  ngOnInit(){
    this.userSub = this.dataStorageService.user.subscribe(user => {
      this.isAuthenticated = !user ? false: true;
    });

    //this.dataStorageService.autoLogin();
  }

  onLogOut(){
    this.dataStorageService.logOut();
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
 
  
}
