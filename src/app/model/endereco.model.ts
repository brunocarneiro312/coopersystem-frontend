export class EnderecoModel {

  constructor(
    public id: string,
    public cep: string,
    public logradouro: string,
    public bairro: string,
    public cidade: string,
    public uf: string,
    public complemento: string
  ) {

  }
}
