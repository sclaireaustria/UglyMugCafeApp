import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/order.service';
import { AppComponent } from 'src/app/app.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styles: [
  ]
})
export class OrderListComponent implements OnInit {

  constructor(public service:OrderService, public appService: AppComponent) { }

  ngOnInit(): void {
    this.service.getQueue();
  }

  onSubmit(form:NgForm) {
  }

  itemIdentity(index, item) {
    console.log("index:{i}, item:{s}", index, item)
    return index;
  }

  populateForm(selectedRecord) {
    this.service.orderFormData = Object.assign({}, selectedRecord);
  }

  onDelete(OrderId) {
    if (confirm('Proceed with order cancellation?')) {
      this.service.deleteOrder(OrderId).subscribe(res => {
        this.service.refreshList();
      })
    }
  }

}
