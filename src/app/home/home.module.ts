import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations: [
        HomeComponent
    ],

    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([{ path: '', component: HomeComponent }])
    ],

    exports: [

    ]
})
export class HomeModule{}