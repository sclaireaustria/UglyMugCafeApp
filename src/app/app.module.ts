import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { OrderService } from './shared/order.service'
import { appRoutingModule } from './app.routing';
import { MenuComponent } from './orders/order/menu/menu.component';
import { TempMenuComponent } from './orders/order/temp-menu/temp-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderComponent,
    OrderListComponent,
    MenuComponent,
    TempMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    appRoutingModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
