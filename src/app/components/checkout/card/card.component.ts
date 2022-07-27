import {  Component, OnInit } from '@angular/core'; 
import {  Router } from '@angular/router'; 
import { CardHolder } from 'src/app/models/checkouts/CardHolder';
import { ResponseCheckout } from 'src/app/models/checkouts/ResponseCheckout';
import { PaymentService } from 'src/app/services/PaymentService';

 
declare var loadCardForm: any;
declare var getToken: any
declare var atualizarToken: any
declare var getValid: any

@Component({
  selector: 'spa-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  isLoad: boolean = true
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
    private paymentService: PaymentService,
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

     
     
    console.log('isvalid() = ' + this.isValid)

    if(getValid()){
      this.isValid = 'true' 
    new atualizarToken()
    this.token = getToken()
    if (this.token.token != null) {
      console.log('TOKEN ' + this.token.token + ' ' + this.isValid) 
     
    }
     
  }
  else{
    this.isValid = 'false' 
  }
    console.log('Valid '  + this.isValid + ' text = ' )
  }

  pagar() {
    if (this.token.token == null) {
      // this.execute()
    }
    this.isLoad = false
    this.paymentService.processPayment(this.token).subscribe(result => {
      this.responsePay = result
      if (this.responsePay.status == 'approved') {
        this.route.navigate(['/pedido/status/' + this.responsePay.id]);
      }

    }, (erro) => {
      console.log('Error ' + JSON.stringify(erro))
      this.isLoad = true
      this.error = erro
    })




  }




}
