import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SharedService} from '../../services/shared.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  shared: SharedService;

  constructor() {
    this.shared = SharedService.getIntance();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authRequest : any;
    let headers = new HttpHeaders();

    headers = headers
      .set('Content-Type', 'application/json; charset=utf-8')
      .set('Authorization', 'Bearer ' + this.shared.token);

    if (this.shared.isLoggedIn() && req.url != "https://viacep.com.br/ws/70765110/json/") {
      authRequest = req.clone({
        headers: headers
      });
      return next.handle(authRequest);
    }
    else {
      return next.handle(req);
    }
  }
}
