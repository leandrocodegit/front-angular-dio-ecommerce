import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core"; 
 

@Injectable({
    providedIn: 'root'
})
export class MensagemService {
    
    constructor() { }

    mensage: string[] = []

    sendMesage(msg: string[])   {       
        this.mensage = msg
    }

    

}