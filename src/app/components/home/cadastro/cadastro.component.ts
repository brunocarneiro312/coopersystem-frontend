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
  confirmPassword: string;

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

    let p = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    if (!p.test(this.email)) {
      this.message = "Email inválido. Deve manter o formato 'email@email.com'";
      return;
    }

    this.user.emails.push(new EmailModel(this.email));
    this.email = undefined;
  }

  criarUsuario() {

    if (this.user.emails.length == 0) {
      this.message = 'É necessário cadastar pelo menos um e-mail.';
      return;
    }

    if (this.user.telefones.length == 0) {
      this.message = 'É necessário cadastrar pelo menos um telefone';
      return;
    }

    if (this.user.password != this.confirmPassword) {
      this.message = 'O password inserido não bate com a confirmação';
      return;
    }

    this.user.cpf = this.user.cpf.replace('.', '')
      .replace('-', '');

    this.user.endereco.cep = this.user.endereco.cep.replace('-', '');

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
