import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { OrderService } from '../services/order.service';
import { Order } from '../shared/order.model';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {
  @ViewChild('f') orderForm: NgForm;
  user: {email: string, firstname: string, lastname: string, id: string};
  getOrders = [];
  userOrder = [];
  id: string;
  submitted = false;
  total = 0;
  price = 4.75;
  viewOrder = false;
  newOrder;
  getOrder;
  showOrder = false;
  error: string = null;

  constructor(private route: ActivatedRoute,
        private orderService: OrderService,
        private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
      this.user = {
        email: this.route.snapshot.params['email'],
        firstname: this.route.snapshot.params['firstname'],
        lastname: this.route.snapshot.params['lastname'],
        id: this.route.snapshot.params['id']
      }
      this.error = null;
      this.dataStorageService.autoLogin();
  }
  
  onSubmit(){
    this.submitted = true;
    this.viewOrder = true;
      this.newOrder = new Order(this.orderForm.value.coffee, this.orderForm.value.creamer, this.orderForm.value.topping, this.orderForm.value.syrup, this.orderForm.value.sweetener, this.price, Number(this.orderForm.value.quantity), this.user.id);
      this.orderService.addOrder(this.newOrder);
      this.dataStorageService.storeOrder(this.newOrder)
        .subscribe(data => {
          console.log(data);
        },
          errorMessage => {
          console.log(errorMessage);
          this.error = errorMessage;
        });
  }

  onViewOrder(){
    this.submitted = false;
    this.showOrder = true;
    this.dataStorageService.fetchOrders(this.user.id)
      .subscribe(data => {
        console.log(data);
        this.orderService.setOrder(data);
        this.getOrders = this.orderService.getOrders();
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
      });
  }

  onHandleError(){
    this.error = null;
  }
}
