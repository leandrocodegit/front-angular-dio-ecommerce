import { Payer } from "./Payer"

export class CardHolder {
     
    token: string
    issuerId: string
    paymentMethodId: string
    transactionAmount: string
    installments: string
    productDescription: string
    payer: Payer
 

    constructor(
        token: string,
        issuerId: string,
        paymentMethodId: string,
        transactionAmount: string,
        installments: string,
        productDescription: string,
        payer: Payer
    ) {
        this.token = token
        this.issuerId = issuerId        
        this.paymentMethodId = paymentMethodId
        this.transactionAmount = transactionAmount 
        this.installments = installments
        this.productDescription = productDescription
        this.payer = payer 
    }
}