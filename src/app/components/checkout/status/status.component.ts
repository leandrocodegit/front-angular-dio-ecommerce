import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ResponseCheckout } from 'src/app/models/checkouts/ResponseCheckout';
import { Pedido } from 'src/app/models/pedidos/Pedido';
import { PedidoService } from 'src/app/services/PedidoService';

@Component({
  selector: 'spa-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  id: string = ''
  pedido: Pedido = {} as Pedido

  constructor(
    private pedidoService: PedidoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']
    })

    this.pedidoService.buscarPedido(this.id).subscribe(result => {
      this.pedido = result
    })
  }



}
