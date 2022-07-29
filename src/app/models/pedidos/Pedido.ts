import { EmbeddedPayment } from "../checkouts/EmbeddedPayment"
import { Produto } from "../Produto" 

export interface Pedido{
    id: string
    status: string
    order: string
    lastUpdade: Date 
    total: number 
    totalRecebido: number;
    descricao: string;    
    produtos: Produto[] 
    payment: EmbeddedPayment; 
    payments: EmbeddedPayment[];
}