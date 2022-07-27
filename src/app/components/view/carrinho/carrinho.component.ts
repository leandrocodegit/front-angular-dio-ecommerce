import { Component, OnInit } from '@angular/core'; 
import { Produto } from 'src/app/models/Produto';
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


  constructor() {

    this.produtos = [this.p1, this.p2]

   }

  ngOnInit(): void {
  }

}
