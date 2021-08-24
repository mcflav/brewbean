import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from "./services/auth-interceptor.service";
import { DataStorageService } from "./services/data-storage.service";
import { OrderService } from "./services/order.service";
import { UsersService } from "./services/users.service";

@NgModule({
    providers: [
        UsersService,
        OrderService, 
        DataStorageService,
        {
            provide: HTTP_INTERCEPTORS, 
            useClass: AuthInterceptorService, 
            multi: true
        }
    ]
})
export class CoreModule{}