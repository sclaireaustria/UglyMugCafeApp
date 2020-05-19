import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/order.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  constructor(public service:OrderService) { }

  ngOnInit(): void {
    this.service.getMenu();
  }

}
