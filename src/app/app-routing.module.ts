import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)},
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
    { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)},
    { path: 'order-items/:email/:firstname/:lastname/:id', loadChildren: () => import('./order-items/order-items.module')
        .then(m => m.OrderItemModule) }
];

  @NgModule({
      imports: [
          RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
      ],
      exports: [RouterModule]
  })
  export class AppRoutingModule {

  }