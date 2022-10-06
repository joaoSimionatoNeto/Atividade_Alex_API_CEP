import { Component } from '@angular/core';
import { CepService } from './service/cep.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public cep:string;
  public end:any = {logradouro:'',bairro:'',localidade:'',uf:''}
  constructor(private cepService:CepService) {}

  consultaCep(){
      this.cepService.pegarEndereco(this.cep)
      .then((json)=>{
          this.end = json;
      })
      .catch((erro)=>{
          console.log(erro);
      });
  }

}
