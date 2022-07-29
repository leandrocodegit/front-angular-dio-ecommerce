 
import { Injectable } from "@angular/core"; 

@Injectable({
    providedIn: 'root'
  })
export class LoginService{

    email = ""
    token = ""

    constructor(){}
 
    saveToken(email: string, token: string){
        this.email = email
        this.token = token
    }

}