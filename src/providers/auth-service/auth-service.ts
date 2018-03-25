import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AlertServiceProvider } from '../alert-service/alert-service';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  apiUrl = 'api';//'api'; http://177.52.170.238:84/v1';
  userInfo: any;

  constructor(
    public http: Http,
    public alertService: AlertServiceProvider
  ) {
    console.log('Hello AuthServiceProvider Provider');
  }

  login(user) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(this.apiUrl + '/Tokens/New?email=' + user['nome'] + '&dataFormat=json&password=' + user['senha'] + '&duration=200', null, { headers: headers })
        .subscribe(res => {
          if (res.json()) {
            resolve(res.json());
          } else {
            reject("Erro ao fazer login. Usuário não encontrado ou senha incorreta");
          }
        }, (err) => {
          reject(err);
        });
    });
  }

  getUserInfo(userInfo = localStorage.getItem('login')) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      var consulta = this.apiUrl + '/Users/Info?token=' + localStorage.getItem('token') + '&id=' + userInfo + '&dataFormat=json';

      this.http.post(consulta, null, { headers: headers }).subscribe(res => {
        if (this.tokenExpired(res.json()['Message'])) {
          this.alertService.presentToast('Sua sessão expirou');
          reject(res.json()['Message']);
        } else {
          this.userInfo = res.json();
          resolve(res.json());
        }
      }, (err) => {
        reject(err);
      });
    });
  }

  private tokenExpired(message): boolean {
    if (message == 'Authentication failed.') {
      this.logout();
      return true;
    }
    return false;
  }

  getUserData() {
    let user1 = {
      Id: '',
      Nome: '',
      CpfCnpj: '',
      Celular: '',
      Email: '',
      SaldoTotal: '',
      SaldoDisponivelSaque: '',
      NomeMoeda: '',
      MoedaSimbolo: '',
      NumeroCartao: '',
      TitularCartao: '',
      DataCartao: '',
      Endereco: '',
      DataNascimento: '',
      IsBloqueado: false
    }
    this.getUserInfo().then((result) => {

      localStorage.setItem('username', result['Nome']);
      localStorage.setItem('id', result['Id']);
      localStorage.setItem('cpf', result['CpfCnpj']);

      for (let o in result) {
        user1[o] = result[o];
      }
    });
    return user1;
  }

  logout() {

  }

}
