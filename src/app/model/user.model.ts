import {EnderecoModel} from './endereco.model';
import {TelefoneModel} from './telefone.model';
import {EmailModel} from './email.model';

export class User {

  // constructor(
  //   public id: string,
  //   public username: string,
  //   public password: string,
  //   public authority: []) {
  //
  // }

  constructor(
    public id: string,
    public username: string,
    public password: string,
    public nome: string,
    public cpf: string,
    public ativo: boolean,
    public authorities: any[],
    public endereco: EnderecoModel,
    public telefones: TelefoneModel [],
    public emails: EmailModel []
  ) {

  }
}
