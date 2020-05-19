import { OrderService } from 'src/app/shared/order.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: []
})
export class OrderComponent implements OnInit {

  constructor(public service:OrderService) {
  }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?:NgForm) {
    if(form!= null)
      form.resetForm();
    this.service.orderFormData = {
      OrderId:0,
      CreateDate: null,
      UpdateDate: null,
      CustomerName: '',
      IcedLatte: 0,
      WMC: 0,
      DirtyHorchata: 0,
      TruffleFries: 0,
      Bagel: 0,
      Espresso: 0,
      StatusId: 0
    }
  }

  onSubmit(form:NgForm) {
    this.service.postOrder(form.value).subscribe(
        res => {
          this.resetForm(form);
        },
        err => {
          console.log(err);
        }
    )
    /*this.service.postOrderDetail(form.value).subscribe(
      res => {
        this.resetForm(form);
      },
      err => {
        console.log(err);
      }
    )*/
  }
}
