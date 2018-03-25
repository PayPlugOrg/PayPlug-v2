import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LandingPage } from '../landing/landing';
import { AlertServiceProvider } from '../../providers/alert-service/alert-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertService: AlertServiceProvider
  ) {

    this.alertService.showLoader('Validando acesso...');
  }

  ionViewWillEnter() {

    if (!localStorage.getItem('token')) {
      setTimeout(() => {
        this.navCtrl.setRoot(LandingPage);
      });

    }
    this.alertService.loading.dismiss();
  }

  open(page) {
    this.navCtrl.push(page, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  logout() {
    localStorage.clear();
    this.navCtrl.setRoot('LoginPage', {}, {
      animate: true,
      direction: 'back'
    });
  }

}
