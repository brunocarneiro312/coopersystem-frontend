import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user.model';
import {COOPERSYSTEM_API} from './coopersystem.api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  /**
   * Realiza o login
   * @param user: usuário a ser logado
   */
  login(user: User) {
    return this.http.post(`${COOPERSYSTEM_API}/auth`, user);
  }

  /**
   * Cria ou altera usuário
   * @param user
   */
  createOrUpdate(user: User) {
    if (user.id != null && user.id != '') {
      return this.http.put(`${COOPERSYSTEM_API}/api/user`, user);
    }
    else {
      user.id = null;
      return this.http.post(`${COOPERSYSTEM_API}/api/user`, user);
    }
  }

  /**
   * Lista todos os usuários cadastrados
   * @param page
   * @param count
   */
  findAll(page: number, count: number) {
    return this.http.get(`${COOPERSYSTEM_API}/api/user`);
  }

  /**
   * Busca usuário por id
   * @param id
   */
  findById(id: number) {
    return this.http.get(`${COOPERSYSTEM_API}/api/user/${id}`);
  }

  delete(id: number) {
    return this.http.delete(`${COOPERSYSTEM_API}/api/user/${id}`);
  }
}
