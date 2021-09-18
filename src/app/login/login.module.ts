import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from "./login.component";
import { ShowHidePasswordModule } from "ngx-show-hide-password";

@NgModule({
    declarations: [
        LoginComponent
    ],

    imports: [
        FormsModule,
        SharedModule,
        ShowHidePasswordModule,
        RouterModule.forChild([{ path: '', component: LoginComponent },])
        
    ],

    exports: [

    ]
})
export class LoginModule{}