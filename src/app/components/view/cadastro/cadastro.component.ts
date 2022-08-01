import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Address } from 'src/app/models/Address';
import { Cadastro } from 'src/app/models/Cadastro';
import { Endereco } from 'src/app/models/Endereco';
import { EnderecoService } from 'src/app/services/EnderecoService';
import { LoginService } from 'src/app/services/LoginService';
import { RouterService } from 'src/app/services/RouterService';

@Component({
  selector: 'spa-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit, OnDestroy {

  endereco = {} as Address 
  cadastro:Cadastro = {} as Cadastro
 
  constructor(
    private enderecoService: EnderecoService,
    private loginService: LoginService,
    private routerService: RouterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.routerService.savePreviosPage(this.router.url)
    this.loginService.buscaCadastro("lpoliveira.ti@gmail.com").subscribe(result => {
      this.cadastro = result
    })
  }
  ngOnDestroy(): void {
    
  }

  buscaCep(cep: string){  

    if(cep.length == 8)
    this.enderecoService.findAddressByCep(cep).subscribe(result => {
      this.endereco = result
    })
  }

}
