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

  apiUrl = 'http://177.52.170.238:84/v1';//'api'; http://177.52.170.238:84/v1';
  userInfo: any;

  constructor(
    public http: Http,
    public alertService: AlertServiceProvider
  ) {
    console.log('Hello AuthServiceProvider Provider');
  }

  login(user) {
    console.log(user['username'] + user['password']);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(this.apiUrl + '/Tokens/New?email=' + user['username'] + '&dataFormat=json&password=' + user['password'] + '&duration=200', null, { headers: headers })
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

  paymentAuthenticate(password: string) {

    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      var consulta = this.apiUrl + '/Users/ValidarSenhaLiberacao?token=' + localStorage.getItem('token') + '&password=' + password + '&dataFormat=json';

      this.http.post(consulta, null, { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        })
    })
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

  doBilling(idCartao, billingValue, password, source?) {

    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      if (!source)
        source = localStorage.getItem('login');

      var consulta = this.apiUrl + '/Cartao/CobrarComCartao?token=' + localStorage.getItem('token') + '&idCartao=' + idCartao + '&valor=' + billingValue + '&IdUsuarioOrigem=' + source + '&dataFormat=json' + '&senha=' + password;

      this.http.post(consulta, null, { headers: headers })
        .subscribe(res => {

          resolve(res.json());
        }, (err) => {

          reject(err);
        });
    });
  }

  doTransfer(idTo, value, password) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      var consulta = this.apiUrl + '/Transactions/Save?token=' + localStorage.getItem('token') + '&idFrom=' + localStorage.getItem('login') + '&idTo=' + idTo + '&idType=3' + '&value=' + value + '&liberationPassword=' + password + '&dataFormat=json';


      this.http.post(consulta, null, { headers: headers })
        .subscribe(res => {

          resolve(res.json());
        }, (err) => {

          reject(err);
        });
    });
  }

  phoneCheck(simInfo) {
    console.log(simInfo);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      var consulta = this.apiUrl
        + '/Users/SavePreCadastro?'
        +'id_device=' + simInfo.info['deviceId']
        + '&celular=' + simInfo.number['phone']
        + '&sim_serial=' + simInfo.info['simSerialNumber']
        + '&sim_operador=' + simInfo.info['mcc']
        + '&sim_country_isocoe=' + simInfo.info['countryCode']
        + '&lac=' + simInfo.info['mcc']
        + '&cell_id=' + simInfo.info['mnc']
        + '&ntw_iso_code=' + simInfo.info['countryCode']
        + '&ntw_operador=' + simInfo.info['mcc']
        + '&ntw_operador_nome=' + simInfo.info['carrierName']
        + '&latitude=' 
        + '&longitude=' 
        + '&current_address=' 
        + '&dataFormat=json';
      console.log(consulta);
      this.http.post(consulta, null, { headers: headers })
        .subscribe(res => {

          resolve(res.json());
        }, (err) => {

          reject(err);
        });
    });
  }

  phoneCheckCode(codeInfo) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      var consulta = this.apiUrl
        + '/Users/SavePreCadastro?'
        +'id_device=' + codeInfo['deviceId']
        + '&celular=' + codeInfo['phoneNumber']
        + '&sim_serial=' + codeInfo['simSerialNumber']
        + '&sim_operador=' + codeInfo['mcc']
        + '&sim_country_isocoe=' + codeInfo['countryCode']
        + '&lac=' + codeInfo['mcc']
        + '&cell_id=' + codeInfo['mnc']
        + '&ntw_iso_code=' + codeInfo['countryCode']
        + '&ntw_operador=' + codeInfo['mcc']
        + '&ntw_operador_nome=' + codeInfo['carrierName']
        + '&latitude=' 
        + '&longitude=' 
        + '&current_address=' 
        + '&dataFormat=json';

      this.http.post(consulta, null, { headers: headers })
        .subscribe(res => {

          resolve(res.json());
        }, (err) => {

          reject(err);
        });
    });
  }

  logout() {

  }

  getReceipt(identifier) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      var consulta = this.apiUrl + '/Comprovante/GerarComprovante?token=' + localStorage.getItem('token') + '&Identifier=' + identifier + '&desc=pagamentoviaappionic&dataFormat=json';

      this.http.post(consulta, null, { headers: headers })
        .subscribe(res => {

          resolve(res.json());
        }, (err) => {

          let alert = this.alertService.alertCtrl.create({
            title: 'Erro!',
            subTitle: err,
            buttons: ['OK']
          });
          alert.present();
          reject(err);
        });
    });
  }

}
