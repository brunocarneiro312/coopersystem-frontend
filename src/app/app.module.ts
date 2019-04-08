import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomHeaderComponent} from './custom-header/custom-header.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/security/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import {SharedService} from './services/shared.service';
import {FormsModule} from '@angular/forms';
import {AuthInterceptor} from './components/security/auth.interceptor';
import {AuthGuard} from './components/security/auth.guard';
import {ClienteComponent} from './components/home/cliente/cliente.component';
import { CadastroComponent } from './components/home/cadastro/cadastro.component';
import {CepService} from './services/cep.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomHeaderComponent,
    HomeComponent,
    LoginComponent,
    ClienteComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService,
    SharedService,
    CepService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
