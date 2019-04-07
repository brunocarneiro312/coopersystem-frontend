import {User} from './user.model';

/**
 * Representa o usuário logado.
 */
export class CurrentUser {

  public token: string;
  public jwtUser: User;

}
