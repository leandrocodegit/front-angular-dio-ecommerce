import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedidos/Pedido';
import { PedidoService } from 'src/app/services/PedidoService';

@Component({
  selector: 'spa-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos: Pedido[] = []
  panelOpenState = false;

  constructor(
    private pedidoService: PedidoService
  ) { }

  ngOnInit(): void {
   this.pedidoService.listPedidos().subscribe(result => {
      this.pedidos = result
   })
  }

}
