import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

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
    quantity: '',
    creamers: '',
    toppings: '',
    syrups: '',
    sweeteners: ''
  }
  submitted = false;
  quantityNegative = false;
  total = 0;
  price = 4.75;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.user = {
        email: this.route.snapshot.params['email'],
        firstname: this.route.snapshot.params['firstname'],
        lastname: this.route.snapshot.params['lastname']
      }
  }
  
  onSubmit(){
    if(this.orderForm.value.quantity <= 0){
      this.quantityNegative = true;
      this.submitted = false;
    } else {
      this.quantityNegative = false;
      this.submitted = true;
      this.order.coffee = this.orderForm.value.coffee;
      this.order.quantity = this.orderForm.value.quantity;
      this.order.creamers = this.orderForm.value.creamers;
      this.order.toppings = this.orderForm.value.toppings;
      this.order.syrups = this.orderForm.value.syrups;
      this.order.sweeteners = this.orderForm.value.sweeteners; 
      this.total = this.price * this.orderForm.value.quantity;
    }
       
  }

}
