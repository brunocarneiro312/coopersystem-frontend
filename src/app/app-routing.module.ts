import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/security/login/login.component';
import {AuthGuard} from './components/security/auth.guard';
import {ClienteComponent} from './components/home/cliente/cliente.component';
import {CadastroComponent} from './components/home/cadastro/cadastro.component';
import {UserDetailsComponent} from './user-details/user-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'cliente', component: ClienteComponent, canActivate: [AuthGuard] },
  { path: 'cadastro', component: CadastroComponent, canActivate: [AuthGuard] },
  { path: 'details', component: UserDetailsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
