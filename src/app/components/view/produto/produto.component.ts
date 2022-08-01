import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensagemService } from 'src/app/services/MensagemService';
import { RouterService } from 'src/app/services/RouterService';

@Component({
  selector: 'spa-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit, OnDestroy {

  constructor(
    private mensagemService: MensagemService,
    private routerService: RouterService,
    private router: Router
  ) { }

  ngOnInit(): void {

    var agora = new Date()
    var saldacao = 'Muito '

    if (agora.getHours() >= 0 && (agora.getHours() <= 11 && agora.getMinutes() < 59)) {
      saldacao += ' bom dia!'
    }
    else if (agora.getHours() >= 12 && (agora.getHours() <= 17 && agora.getMinutes() < 59)) {
      saldacao += ' boa tarde!'
    }
    else if (agora.getHours() >= 18 && (agora.getHours() <= 23 && agora.getMinutes() < 59)) {
      saldacao += ' boa noite!'
    }

    this.mensagemService.sendMesage([saldacao, "Que bom te ver por aqui, clique em comprar para prosseguir!"], false)
  }

  ngOnDestroy(): void {
    this.routerService.savePreviosPage(this.router.url)
  }
}


