import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/order.model';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-list-edit',
  templateUrl: './order-list-edit.component.html',
  styleUrls: ['./order-list-edit.component.css']
})
export class OrderListEditComponent implements OnInit {

  //@Output() orderCreated = new EventEmitter<Order>();

  constructor(private orderService: OrderService) { }

  newOrder;
  orderIncomplete = false;
  message;

  ngOnInit(): void {
  }

  addOrder(coffeeInput: HTMLInputElement, typeInput: HTMLInputElement, sizeInput: HTMLInputElement,
    amountInput: HTMLInputElement, priceInput: HTMLInputElement,  totalInput: HTMLInputElement){
      if(coffeeInput.value == "" || typeInput.value == "" || sizeInput.value == "" || 
      amountInput.value == "" || priceInput.value == "" || totalInput.value == ""){
          this.orderIncomplete = true;
          this.message = this.orderService.noOrderMessage();
      }else{
          this.orderIncomplete = false;
          this.newOrder = new Order(coffeeInput.value, typeInput.value, sizeInput.value, Number(amountInput.value), 
          Number(priceInput.value), Number(totalInput.value));
          this.orderService.addOrder(this.newOrder);
      }
        

        // this.orderCreated.emit({
        //     coffee: coffeeInput.value,
        //     type: typeInput.value,
        //     size: sizeInput.value,
        //     amount: Number(amountInput.value),
        //     price: Number(priceInput.value),
        //     total: Number(totalInput.value)
        // });

    }

}
