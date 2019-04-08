import { Component, OnInit } from '@angular/core';
import {CepService} from '../../../services/cep.service';
import {User} from '../../../model/user.model';
import {EnderecoModel} from '../../../model/endereco.model';
import {TelefoneModel} from '../../../model/telefone.model';
import {EmailModel} from '../../../model/email.model';
import {UserService} from '../../../services/user.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  tipoTelefone: string;
  numeroTelefone: string;
  email: string;
  message: string;
  responseStatus: string;

  cep: string;
  user: User = new User('', '', '',
    '', '', true, [],
    new EnderecoModel('', '', '', '', '', '', ''),
    [], []);

  constructor(private cepService: CepService,
              private userService: UserService,
              private router: Router) {
    this.user.authorities.push({"id": 1});
  }

  ngOnInit() {
  }

  getEndereco() {
    return this.cepService.getEndereco(this.cep).subscribe(response => {
      console.log(response);
    })
  }

  adicionarTelefone() {
    this.user.telefones.push(new TelefoneModel(this.tipoTelefone, this.numeroTelefone));
    this.tipoTelefone = undefined;
    this.numeroTelefone = undefined;
  }

  adicionarEmail() {
    this.user.emails.push(new EmailModel(this.email));
    this.email = undefined;
  }

  criarUsuario() {
    return this.userService.createOrUpdate(this.user).subscribe((response :User) => {
      if (response.username != null) {
        this.router.navigate(['/']);
      }
    }, err => {
      console.log(err);
      if (err.status == 403) {
        this.message = `Acesso não autorizado.`;
      }
      else {
        this.message = `Erro ao cadastrar usuário`;
      }
    })
  }
}