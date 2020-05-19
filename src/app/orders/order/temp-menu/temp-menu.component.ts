import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/order.service';

@Component({
  selector: 'app-temp-menu',
  templateUrl: './temp-menu.component.html',
  styles: [
  ]
})
export class TempMenuComponent  {

  constructor(public service:OrderService) { }

  ngOnInit(): void {
  }

}
