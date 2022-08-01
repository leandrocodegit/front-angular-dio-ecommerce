import { EmailValidator } from "@angular/forms";
import { Endereco } from "./Endereco";

export class Cadastro{
    constructor(
        public nome: string,
        public email: string,
        public contato: string,
        public documento: string,
        public endereco: Endereco
        ){}
}