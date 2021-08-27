import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { OrderItemsComponent } from "./order-items.component";
import { AuthGuard } from '../services/auth.guard';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        OrderItemsComponent,
    ],

    imports: [
        FormsModule,
        SharedModule,
        RouterModule.forChild([{ path: '', component: OrderItemsComponent,
        canActivate: [AuthGuard] }])

    ]
})
export class OrderItemModule{}