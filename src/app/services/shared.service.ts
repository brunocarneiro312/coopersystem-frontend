/**
 * Dados compartilhados
 */
import {EventEmitter, Injectable} from '@angular/core';
import {User} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public static instance: SharedService = null;
  user: User;
  token: string;
  showTemplate = new EventEmitter<boolean>();

  constructor() {
    this.showTemplate.emit(false);
    return SharedService.instance = SharedService.instance || this;
  }

  /**
   * Recupera uma instância da classe
   */
  public static getIntance() {
    if (this.instance == null) {
      this.instance = new SharedService();
    }
    return this.instance;
  }

  /**
   * Verifica se usuário está logado
   */
  isLoggedIn(): boolean {
    if (this.user == null) {
      return false;
    }
    return this.user.username != '';
  }

}
