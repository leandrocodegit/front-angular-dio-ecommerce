import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from 'src/app/models/Address';
import { Endereco } from 'src/app/models/Endereco';
import { EnderecoService } from 'src/app/services/EnderecoService';

@Component({
  selector: 'spa-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  endereco = {} as Address  

  constructor(private enderecoService: EnderecoService) { }

  ngOnInit(): void {
  }

  buscaCep(cep: string){  

    if(cep.length == 8)
    this.enderecoService.findAddressByCep(cep).subscribe(result => {
      this.endereco = result
    })
  }

}
