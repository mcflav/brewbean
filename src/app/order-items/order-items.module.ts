import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { OrderItemsComponent } from "./order-items.component";
import { AuthGuard } from '../services/auth.guard';

@NgModule({
    declarations: [
        OrderItemsComponent
    ],

    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([{ path: 'order-items/:email/:firstname/:lastname/:id', component: OrderItemsComponent,
        canActivate: [AuthGuard] }])

    ]
})
export class OrderItemModule{}