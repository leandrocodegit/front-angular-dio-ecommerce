import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { MensagemService } from 'src/app/services/MensagemService';
import { RouterService } from 'src/app/services/RouterService';
import { ProdutoComponent } from '../produto/produto.component';

@Component({
  selector: 'spa-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  produtos: Produto[] = [];
  
  p1 = new Produto("80000", 490.90, "Jogo com 6 taças em cristal");
  p2 = new Produto("80000", 490.90, "Jogo com 6 taças em cristal");


  constructor(
    private routerService: RouterService,
    private route: Router,
    private mensagemService: MensagemService

  ) {

    this.produtos = [this.p1, this.p2]

   }

   ngOnInit(): void {
   
    var saldacao = 'Muito bom!'
    if (localStorage.getItem('isLogado') === 'true') {
      saldacao = 'Boa, ' + localStorage.getItem('name')
    }
    this.mensagemService.sendMesage([saldacao, "Aqui você vê o seu carrinho, pode edita-lo e também adicionar mais produtos."], false)
    this.routerService.savePreviosPage(this.route.url)
  }

  

}
