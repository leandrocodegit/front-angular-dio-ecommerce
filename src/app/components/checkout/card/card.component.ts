import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { CardHolder } from 'src/app/models/checkouts/CardHolder';
import { ResponseCheckout } from 'src/app/models/checkouts/ResponseCheckout';
import { MensagemService } from 'src/app/services/MensagemService';
import { PaymentService } from 'src/app/services/PaymentService';
import { SheetComponent } from '../../view/sheet/sheet.component';


declare var loadCardForm: any;
declare var getToken: any
declare var atualizarToken: any
declare var getValid: any
declare var getAuth: any

@Component({
  selector: 'spa-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  isLoad: boolean = false
  isValid: string = 'false'

  card: CardHolder = {} as CardHolder;
  cardNumber: string = '';
  cardExpirationMonth: string = '';
  cardExpirationYear: string = '';
  securityCode: string = '';

  token = {} as CardHolder
  responsePay = {} as ResponseCheckout
  error = {} as any

  constructor(
    private mensagemService: MensagemService,
    private paymentService: PaymentService,
    private _bottomSheet: MatBottomSheet,
    private route: Router
  ) {

  }
  ngOnInit(): void {
    new loadCardForm()
  }


  execute() {
    this.updateToken()
  }

  private updateToken() {

    if (getValid()) {
      this.isValid = 'true'
      new atualizarToken()
      this.token = getToken()
    }
    else {
      this.isValid = 'false'
    }
  }

  pagar() {
    this.isLoad = true
    this.paymentService.processPayment(this.token).subscribe(result => {
      this.responsePay = result
      console.log(result)
      if (this.responsePay.status == 'Aprovado') {
        this.route.navigate(['/pedido/status/' + this.responsePay.id]);
      }
      else {
        this.mensagemService.sendMesage([result.detail, result.status])
        this._bottomSheet.open(SheetComponent);
        setTimeout(() => this._bottomSheet.dismiss(SheetComponent), 3000);
        this.isLoad = false
        this.updateToken()
      }

    }, (erro) => {
      console.log('Error ' + JSON.stringify(erro))
      this.isLoad = true
      this.error = erro
    })
  }

  public signInWithGoogle(): void {
    
    getAuth()
  
}


}
