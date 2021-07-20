import { Order } from '../shared/order.model';
import { Subject } from 'rxjs';

export class OrderService{
    orderChanged = new Subject<Order[]>();

    private order: Order[] = [];
    private newOrder = [];

    setOrder(order) {
      this.order = order;
      this.orderChanged.next(this.order);
    }

    getOrders(){
       return this.order.slice();
    }

   //  getOrder(email: string){
   //     for(var i = 0; i < this.order.length; i++){
   //       if(this.order[i].email === email){
   //          return this.order;
   //       }
   //     }
   //  }

    addOrder(order: Order){
       this.order.push(order);
       this.orderChanged.next(this.order.slice());
    }

    updateOrder(index: number, newOrder: Order){
       this.order[index] = newOrder;
       this.orderChanged.next(this.order.slice());
    }

    deleteOrder(index: number){
       this.order.splice(index, 1);
       this.orderChanged.next(this.order.slice());
    }
}