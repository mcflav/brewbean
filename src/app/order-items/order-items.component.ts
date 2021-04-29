import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { OrderService } from '../services/order.service';
import { Order } from '../shared/order.model';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {
  @ViewChild('f') orderForm: NgForm;
  user: {email: string, firstname: string, lastname: string};
  order = {
    coffee: '',
    creamer: '',
    topping: '',
    syrup: '',
    sweetener: '',
    price: 0,
    quantity: 0,
    subTotal: 0
  } 
  getOrders = [];
  id: number;
  submitted = false;
  total = 0;
  price = 4.75;
  viewOrder = false;
  newOrder;
  showOrder = false;

  constructor(private route: ActivatedRoute,
        private orderService: OrderService) { }

  ngOnInit(): void {
      this.user = {
        email: this.route.snapshot.params['email'],
        firstname: this.route.snapshot.params['firstname'],
        lastname: this.route.snapshot.params['lastname']
      }
  }
  
  onSubmit(){
    this.submitted = true;
    this.viewOrder = true;
      this.newOrder = new Order(this.user.email, this.orderForm.value.coffee, this.orderForm.value.creamer, this.orderForm.value.topping, this.orderForm.value.syrup, this.orderForm.value.sweetener, this.price, Number(this.orderForm.value.quantity));
      this.orderService.addOrder(this.newOrder);
  }

  onViewOrder(){
    this.submitted = false;
    this.showOrder = true;
    this.getOrders = this.orderService.getOrders(this.user.email);
    console.log(this.getOrders);
  }
}
