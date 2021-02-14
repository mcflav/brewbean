import { Order } from '../shared/order.model';
import { EventEmitter } from '@angular/core';

export class OrderService{
    message;
    orderChanged = new EventEmitter<Order[]>();

    private orders: Order[] = [
        new Order('columbia', 'caf', 'small', 1, 2.55, 1 * 2.55),
        new Order('french roast', 'decaf', 'medium', 2, 3.55, 2 * 3.55),
        new Order('breakfast blend', 'caf', 'large', 3, 4.55, 3 * 4.55)
      ];

      getOrders(){
          return this.orders.slice();
      }

       addOrder(order: Order){
           this.orders.push(order);
           this.orderChanged.emit(this.orders.slice());
       }

       noOrderMessage(){
           return this.message = "Please complete all fields to add an order.";
       }



}