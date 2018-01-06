import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class PaymentService {

  authToken: any;

  constructor(
    private http:Http
  ) { }

  // Register 
  // Register new user
  addNewPayment(payment){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/payments/addNewPayment', payment, {headers: headers})
      .map(res => res.json());
  }


  getPaymentRecordById(paymentId){
    let headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    
    let params: URLSearchParams  = new URLSearchParams();
    params.set("paymentId", paymentId);

    return this.http.get('http://localhost:3000/payments/getPaymentRecordById', { headers: headers, params: params })
      .map(res => res.json());
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

}
