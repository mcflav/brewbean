import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { OrderItemModule } from './order-items/order-items.module';
import { CoreModule } from './core.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ShowHidePasswordModule,
    AppRoutingModule,
    HttpClientModule,
    RegisterModule,
    LoginModule,
    OrderItemModule,
    CoreModule,
    AboutComponent,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
