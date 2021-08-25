import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
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
        AlertComponent,
        CommonModule
    ],

    entryComponents: [AlertComponent]
})
export class SharedModule{}