import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensagemService } from 'src/app/services/MensagemService';
import { RouterService } from 'src/app/services/RouterService';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'spa-forma-pagamento',
  templateUrl: './forma-pagamento.component.html',
  styleUrls: ['./forma-pagamento.component.css']
})
export class FormaPagamentoComponent implements OnInit, OnDestroy {

  constructor(
    private routerService: RouterService,
    private router: Router,
    private mensagemService: MensagemService
  ) { }
  
  ngOnInit(): void {  
    console.log('Pagina atual ' + this.routerService.previosPage)
    if (this.routerService.previosPage == '/login') {
      var saldacao = 'Muito bom!'
      if (localStorage.getItem('isLogado') === 'true') {
        saldacao = 'É isso ae, ' + localStorage.getItem('name') + '!'
      }
      this.mensagemService.sendMesage([saldacao, "Escolha umas das formas de pagamento e bora lá!"], true)
    }
    this.routerService.savePreviosPage(this.router.url)  
  }

  ngOnDestroy(): void { 
  }

}
