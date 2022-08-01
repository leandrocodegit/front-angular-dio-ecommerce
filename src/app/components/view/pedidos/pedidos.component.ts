import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/models/pedidos/Pedido';
import { PedidoService } from 'src/app/services/PedidoService';
import { RouterService } from 'src/app/services/RouterService';

@Component({
  selector: 'spa-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit, OnDestroy {

  pedidos: Pedido[] = []
  panelOpenState = false;
 
    constructor(
      private pedidoService: PedidoService,
      private routerService: RouterService,
      private router: Router
    ) { }
 
  ngOnInit(): void { 
   this.pedidoService.listPedidos().subscribe(result => {
      this.pedidos = result
   })
  }

  ngOnDestroy(): void {
    this.routerService.savePreviosPage(this.router.url)
  }

}
