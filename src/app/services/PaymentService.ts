import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CardHolder } from "../models/checkouts/CardHolder";
import { ResponseCheckout } from "../models/checkouts/ResponseCheckout";
 

@Injectable({
    providedIn: 'root'
})
export class PaymentService {

    
    constructor(private httpClient: HttpClient) { }

    responsePay = {} as ResponseCheckout

    processPayment(card: CardHolder): Observable<ResponseCheckout>  {       

        const options = new HttpHeaders()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*');
          return   this.httpClient.post<ResponseCheckout>("http://localhost:9000/process_pay", JSON.stringify(card), { 'headers': options }) 
    }

    

}