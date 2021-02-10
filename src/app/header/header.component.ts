import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    order = "";

    @Output() orderList = new EventEmitter<{order: string}>();
    
    orderLinkClick(){
      this.orderList.emit({
          order: "order"
      });
    }
}