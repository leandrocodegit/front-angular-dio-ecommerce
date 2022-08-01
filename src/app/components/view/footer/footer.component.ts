import { Component, Input, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet'; 
import { Router } from '@angular/router';
import { RouterService } from 'src/app/services/RouterService';
import { SheetComponent } from '../sheet/sheet.component'; 

@Component({
  selector: 'spa-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{

  nameBottom: string = "Continuar"
  nextUrl: String = "" 
  color: String = "black" 
  
  constructor(
    private _bottomSheet: MatBottomSheet,
    private route: Router,
    private routerService: RouterService) {      
    }  
  ngOnInit(): void {
    this.navigate()
    if(this.route.url == '/scan'){
      this.color = 'aqua'
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

    redirect(){
      console.log('Logado ' + localStorage.getItem("isLogado"))
      if(localStorage.getItem("isLogado") !== "true"){ 
        this.nextUrl = "/login" 
      }  
    }

    navigate(){
      if(this.route.url == "/"){
        this.nameBottom = "Comprar"
        this.nextUrl = "/cart"
      }  
      if(this.route.url == "/scan"){
        this.nameBottom = "Voltar"
        this.nextUrl = "/pagamento" 
      } 
      if(this.route.url == "/cart"){
        this.nameBottom = "Continuar"
        this.nextUrl = "/pagamento"
        this.redirect()
      } 
      
      if(this.route.url == "/cadastro"){
        this.nameBottom = "Continuar"
        this.nextUrl = "/pagamento"
        this.redirect()
      }
      if(this.route.url == "/pagamento"){
        this.nameBottom = "Voltar ao carrinho"
        this.nextUrl = "/cart"        
      }
      if(this.route.url == "/pagamento/pix"){
        this.nameBottom = "Alterar forma pagamento"
        this.nextUrl = "/pagamento"
        this.redirect()
      }
      if(this.route.url == "/pagamento/card"){
        this.nameBottom = "Pagar"
        this.nextUrl = "/pagamento"
        this.redirect()
      }
      if(this.route.url.includes("/pedido/status/")){
        this.nameBottom = "Continuar"
        this.nextUrl = "/pagamento/card"
        this.redirect()
      }
      if(this.route.url.includes("/login")){
        this.nameBottom = "Voltar"
        this.nextUrl = "/cart"
      }
    }

}
