import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { OrderDetail } from './OrderDetail.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderFormData:Order  
  orderDetailFormData:OrderDetail
  orderDetailFormDataList:OrderDetail[]
  readonly rootURL = "http://localhost:53220/api";
  orderList: Order[];
  productList: Product[];

  constructor(private http:HttpClient) { }

  postOrder(orderFormData:Order) {
    return this.http.post(this.rootURL+'/Order',orderFormData)
  }

  postOrderDetail(orderDetailFormData:OrderDetail) {
    return this.http.post(this.rootURL+'/OrderDetails',orderDetailFormData)
    /*if (orderDetailFormDataList != null) {
      orderDetailFormDataList.forEach( (element) => {
        return this.http.post(this.rootURL+'/OrderDetails',element)
      }); 
    } else {
      return null
    }*/
  }

  putOrder() {
    this.http.put(this.rootURL + '/Order' + this.orderFormData.OrderId, this.orderFormData)
  }

  deleteOrder(id) {
    return this.http.delete(this.rootURL + '/Order/' + id)
  }

  getQueue() {
    this.http.get(this.rootURL + '/Order')
    .toPromise()
    .then(res => this.orderList = res as Order[])
  }

  getMenu() {
    this.http.get(this.rootURL + '/Product')
    .toPromise()
    .then(res => this.productList = res as Product[])
  }

  refreshList() {
    this.http.get(this.rootURL + '/Order')
    .toPromise()
    .then(res => this.orderList = res as Order[]);
  }
  
}
