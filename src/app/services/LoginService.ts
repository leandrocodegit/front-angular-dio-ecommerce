 
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core"; 
import { Observable } from "rxjs";
import { Cadastro } from "../models/Cadastro";

@Injectable({
    providedIn: 'root'
  })
export class LoginService{

    email = ""
    token = ""

    constructor(
        private http: HttpClient
    ){}
 
    saveToken(email: string, token: string){
        this.email = email
        this.token = token
    }

    buscaCadastro(email: string): Observable<Cadastro>{
        const options = new HttpHeaders()
        .set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*');
      return   this.http.post<Cadastro>("http://localhost:9000/process_pay/cadastro", JSON.stringify(email), { 'headers': options })  
    }


}