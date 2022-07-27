import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { CardComponent } from './components/checkout/card/card.component';
import { PixComponent } from './components/checkout/pix/pix.component';
import { StatusComponent } from './components/checkout/status/status.component';
import { CadastroComponent } from './components/view/cadastro/cadastro.component';
import { CarrinhoComponent } from './components/view/carrinho/carrinho.component';
import { FormaPagamentoComponent } from './components/view/forma-pagamento/forma-pagamento.component';
import { ProdutoComponent } from './components/view/produto/produto.component';

const routes: Routes = [
 
  { path: '', component: ProdutoComponent } ,
  { path: 'cart', component: CarrinhoComponent } ,
  { path: 'cadastro', component: CadastroComponent } ,
  { path: 'pagamento', component: FormaPagamentoComponent },
  { path: 'pagamento/card', component: CardComponent },
  { path: 'pagamento/pix', component: PixComponent },
  { path: 'pedido/status', component: StatusComponent },
  { path: 'pedido/status/:id', component: StatusComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
