import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Address } from 'src/app/models/Address'; 

@Injectable({
    providedIn: 'root'
  })
export class EnderecoService{

    constructor(private httpClient: HttpClient){}
 
    findAddressByCep(cep: string): Observable<Address> {
        this.httpClient.get("https://server.com:9000/process_pay")   
        return  this.httpClient.get<Address>("https://viacep.com.br/ws/" + cep +"/json")   
          
    }

}