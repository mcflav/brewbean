import { Order } from '../shared/order.model';
import { Subject } from 'rxjs';

export class OrderService{
    message;
    orderChanged = new Subject<Order[]>();

    private orders: Order[] = [];
    private newOrder = [];

      getOrders(email: string){
        //   return this.orders.slice();
        this.newOrder = this.orders.filter(email => email === email);
        console.log("results are " + this.newOrder.slice());
        return this.newOrder.slice();
      }

      getOrder(index: number){
          return this.orders[index];
      }

      addOrder(order: Order){
        this.orders.push(order);
        this.orderChanged.next(this.orders.slice());
       }

      updateOrder(index: number, newOrder: Order){
          this.orders[index] = newOrder;
          this.orderChanged.next(this.orders.slice());
      }

      deleteOrder(index: number){
          this.orders.splice(index, 1);
          this.orderChanged.next(this.orders.slice());
      }
}