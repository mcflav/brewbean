import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AboutComponent } from "../about/about.component";
import { AlertComponent } from "../alert/alert.component";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";

@NgModule({
    declarations: [
        AboutComponent,
        LoadingSpinnerComponent,
        AlertComponent
    ],

    imports: [
        CommonModule
    ],

    exports: [
        AboutComponent,
        LoadingSpinnerComponent,
        AlertComponent
    ],

    entryComponents: [AlertComponent]
})
export class SharedModule{}