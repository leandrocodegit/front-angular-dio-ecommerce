import { Component, Input, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet'; 
import { Router } from '@angular/router';
import { SheetComponent } from '../sheet/sheet.component'; 

@Component({
  selector: 'spa-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{

  nameBottom: string = ""
  nextUrl: String = ""
  
  constructor(
    private _bottomSheet: MatBottomSheet,
    private route: Router) {

      if(route.url == "/"){
        this.nameBottom = "Comprar"
        this.nextUrl = "/cart"
      }
     
      if(route.url == "/cart"){
        this.nameBottom = "Continuar"
        this.nextUrl = "/cadastro"
      }
      if(route.url == "/cadastro"){
        this.nameBottom = "Continuar"
        this.nextUrl = "/pagamento"
      }
      if(route.url == "/pagamento"){
        this.nameBottom = "Voltar ao carrinho"
        this.nextUrl = "/cart"
      }
      if(route.url == "/pagamento/pix"){
        this.nameBottom = "Alterar forma pagamento"
        this.nextUrl = "/pagamento"
      }
      if(route.url == "/pagamento/card"){
        this.nameBottom = "Pagar"
        this.nextUrl = "/pagamento"
      }
      if(route.url.includes("/pedido/status/")){
        this.nameBottom = "Continuar"
        this.nextUrl = "/pagamento/card"
      }
      if(route.url.includes("/login")){
        this.nameBottom = "Voltar"
        this.nextUrl = "/cart"
      }
    }  

    isOpen: boolean = false
  
    openBottomSheet(): void {
      if(this.isOpen){
        this._bottomSheet.dismiss(SheetComponent);
        this.isOpen = false
      }
      else{
        this._bottomSheet.open(SheetComponent);
        this.isOpen = true 
      }
      
      console.log('clicou' + this.isOpen)
    } 

}
