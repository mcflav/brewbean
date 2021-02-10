import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Order } from '../../shared/order.model';

@Component({
  selector: 'app-order-list-edit',
  templateUrl: './order-list-edit.component.html',
  styleUrls: ['./order-list-edit.component.css']
})
export class OrderListEditComponent implements OnInit {

  @Output() orderCreated = new EventEmitter<Order>();

  constructor() { }

  ngOnInit(): void {
  }

  addOrder(coffeeInput: HTMLInputElement, typeInput: HTMLInputElement, sizeInput: HTMLInputElement,
    amountInput: HTMLInputElement, priceInput: HTMLInputElement,  totalInput: HTMLInputElement){
        this.orderCreated.emit({
            coffee: coffeeInput.value,
            type: typeInput.value,
            size: sizeInput.value,
            amount: Number(amountInput.value),
            price: Number(priceInput.value),
            total: Number(totalInput.value)
        });

    }

}
