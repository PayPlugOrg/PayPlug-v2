import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LandingPage } from '../landing/landing';
import { AlertServiceProvider } from '../../providers/alert-service/alert-service';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  firstName: string;
  saldoTotal = "";
  saldoSaque = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertService: AlertServiceProvider,
    public authService: AuthServiceProvider
  ) {
    this.firstName = localStorage.getItem('username');
    this.alertService.showLoader('Validando acesso...');
  }

  ionViewWillEnter() {

    if (!localStorage.getItem('token')) {
      setTimeout(() => {
        this.navCtrl.setRoot(LandingPage);
      });

    }
    else {
      this.authService.getUserInfo().then((result) => {
        console.log(this.firstName = result['Nome'].split(' ')[0]);
        this.firstName = result['Nome'].split(' ')[0];
        this.saldoTotal = result['SaldoTotal']
        this.saldoSaque = result['SaldoDisponivelSaque'];
      });
    }
    this.alertService.loading.dismiss();
  }

  open(page) {
    var params = {}
    if (page == 'PaymentAuthorizationPage') {
      params = {
        message: 'Informe a senha de liberação para ter acesso aos seus cartões',
        label: 'Senha de Liberação',
        page: 'CardManagementPage'
      };
    }
    this.navCtrl.push(page, params, {
      animate: true,
      direction: 'forward'
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.navCtrl.setRoot('LoginPage', {}, {
      animate: true,
      direction: 'back'
    });
  }

}
