import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login.component";

@NgModule({
    declarations: [
        LoginComponent
    ],

    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([{ path: 'login', component: LoginComponent },])
        
    ],

    exports: [

    ]
})
export class LoginModule{}