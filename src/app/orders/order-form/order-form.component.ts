import { Component, NgZone } from '@angular/core';  
import { Order } from './order.model';
import { OrderFormService } from './order-form.service';

@Component({  
  selector: 'app-order-form',  
  templateUrl: './order-form.component.html',  
  styleUrls: []  
})  
export class OrderFormComponent {  

  title = 'ClientApp';  
  customerName: string = '';
  icedLatte: number = 0;
  wmc: number = 0;
  dirtyHorchata: number = 0;
  truffleFries: number = 0;
  bagel: number = 0;
  espresso: number = 0;
  uniqueID: string = new Date().getTime().toString();  
  orders = new Array<Order>();  
  order = new Order();  

  constructor(  
    private orderFormService: OrderFormService,  
    private _ngZone: NgZone  
  ) {  
    this.subscribeToEvents();  
  }  

  sendOrder(): void {  
    if (this.customerName) {  
      this.order = new Order();  
      this.order.OrderId = this.uniqueID;  
      this.order.CustomerName = this.customerName;         
      this.order.IcedLatte = this.icedLatte;                
      this.order.WMC = this.wmc;                
      this.order.DirtyHorchata = this.dirtyHorchata;      
      this.order.Espresso = this.espresso; 
      this.orders.push(this.order);  
      this.orderFormService.sendOrder(this.order);

      // Reset the data
      this.customerName = '';  
      this.icedLatte = 0;  
      this.wmc = 0;  
      this.dirtyHorchata = 0;  
      this.truffleFries = 0;  
      this.bagel = 0;  
      this.espresso = 0; 
    }  
  }  
  private subscribeToEvents(): void {  

    this.orderFormService.orderReceived.subscribe((order: Order) => {  
      this._ngZone.run(() => {  
        //if (order.OrderId !== this.uniqueID) {  
          order.Type = "received";  
          this.orders.push(order);  
        //}  
      });  
    });  
  }  
}  