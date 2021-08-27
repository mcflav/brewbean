import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AboutComponent } from "./about.component";

@NgModule({
    declarations: [
        AboutComponent
    ],

    imports: [
        FormsModule,
        RouterModule.forChild([{ path: '', component: AboutComponent }])
    ]
})
export class AboutModule{}