import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';

import { CoreModule } from './core.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
//import { FormsModule } from '@angular/forms';
import { OrderItemModule } from './order-items/order-items.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    ShowHidePasswordModule,
    AppRoutingModule,
    HttpClientModule,
    RegisterModule,
    LoginModule,
    CoreModule,
    SharedModule,
    OrderItemModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
