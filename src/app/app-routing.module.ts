import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { AuthGuard } from './services/auth.guard';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent },
    { path: 'order-items/:email/:firstname/:lastname/:id', component: OrderItemsComponent,
    canActivate: [AuthGuard] }
  ];

  @NgModule({
      imports: [
          RouterModule.forRoot(appRoutes)
      ],
      exports: [RouterModule]
  })
  export class AppRoutingModule {

  }