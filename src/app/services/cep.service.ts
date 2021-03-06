import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {VIACEP_API} from './coopersystem.api';
import {$} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) {

  }

  getEndereco(cep: string) {
    return this.http.get(`${VIACEP_API}`.replace('xxxxxxxx', cep));
  }
}
