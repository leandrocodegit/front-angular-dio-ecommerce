import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"; 
import { Pedido } from "../models/pedidos/Pedido";

@Injectable({
    providedIn: 'root'
})
export class PedidoService {

    constructor(private httpClient: HttpClient) { }

    responsePay = {} as Pedido

    buscarPedido(id: string): Observable<Pedido> {
        const options = new HttpHeaders()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*');
        return this.httpClient.get<Pedido>("http://localhost:9000/process_pay/pedido/" + id, { 'headers': options })
    }
}