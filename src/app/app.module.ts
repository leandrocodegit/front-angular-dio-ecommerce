import { inject, NgModule, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/view/footer/footer.component';
import { ProdutoComponent } from './components/view/produto/produto.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SheetComponent } from './components/view/sheet/sheet.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { FormaPagamentoComponent } from './components/view/forma-pagamento/forma-pagamento.component';
import { CarrinhoComponent } from './components/view/carrinho/carrinho.component'; 
import { CardComponent } from './components/checkout/card/card.component';
import { PixComponent } from './components/checkout/pix/pix.component';
import { CadastroComponent } from './components/view/cadastro/cadastro.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadComponent } from './components/view/load/load.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { StatusComponent } from './components/checkout/status/status.component';
import { TopComponent } from './components/view/top/top.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PedidosComponent } from './components/view/pedidos/pedidos.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import { LoginComponent } from './components/social/login/login.component';   
import { LogoutComponent } from './components/social/logout/logout.component'; 
import { CookiesService } from './services/CookiesService';
   
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProdutoComponent,
    SheetComponent,
    FormaPagamentoComponent,
    CardComponent,
    CarrinhoComponent,
    PixComponent,
    CadastroComponent,
    LoadComponent,
    StatusComponent,
    TopComponent,
    PedidosComponent,
    LoginComponent,
    LogoutComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatBottomSheetModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatGridListModule,
    
    
  ],
  providers: [CookiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
