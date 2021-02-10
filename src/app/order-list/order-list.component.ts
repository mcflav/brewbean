import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  total;

  orders: Order[] = [
    new Order('columbia', 'caf', 'small', 1, 2.55, 1 * 2.55),
    new Order('french roast', 'decaf', 'medium', 2, 3.55, 2 * 3.55),
    new Order('breakfast blend', 'caf', 'large', 3, 4.55, 3 * 4.55)
  ];
  constructor() { }

  ngOnInit(): void {
  }


  addedOrder(order: Order){
    this.orders.push(order);
  }

}
