import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { OrderItemsComponent } from './order-items/order-items.component';


const appRoutes: Routes = [
    { path: 'about', component: AboutComponent }
    
  ];

  @NgModule({
      imports: [
          RouterModule.forRoot(appRoutes)
      ],
      exports: [RouterModule]
  })
  export class AppRoutingModule {

  }