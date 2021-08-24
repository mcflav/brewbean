import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RegisterComponent } from "./register.component";

@NgModule({
    declarations: [
        RegisterComponent
    ],

    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([{ path: 'register', component: RegisterComponent }])
    ]
})
export class RegisterModule{}