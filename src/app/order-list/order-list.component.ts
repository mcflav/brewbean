import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/order.model';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
  providers: [OrderService]
})
export class OrderListComponent implements OnInit {
  orders: Order[];
  // orders: Order[] = [
  //   new Order('columbia', 'caf', 'small', 1, 2.55, 1 * 2.55),
  //   new Order('french roast', 'decaf', 'medium', 2, 3.55, 2 * 3.55),
  //   new Order('breakfast blend', 'caf', 'large', 3, 4.55, 3 * 4.55)
  // ];
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
      this.orders = this.orderService.getOrders();
      this.orderService.orderChanged
        .subscribe(
            (orders: Order[]) => {
                this.orders = orders;
            }
        );

  }


  //addedOrder(order: Order){
  //   this.orders.push(order);
  // }

}
