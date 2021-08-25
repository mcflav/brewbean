import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { RegisterComponent } from "./register.component";

@NgModule({
    declarations: [
        RegisterComponent
    ],

    imports: [
        FormsModule,
        SharedModule,
        RouterModule.forChild([{ path: 'register', component: RegisterComponent }])
    ]
})
export class RegisterModule{}