import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardManagementPage } from '../card-management/card-management';
import { HomePage } from '../home/home';

/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {

  items: Array<{ title: string, component: any, description: any, icon: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      { title: 'Saldo', description: 'Confira o sado de todos os cartões cadastrados', component: CardManagementPage, icon: 'home' },
      { title: 'Cartões', description: 'Confira o sado de todos os cartões cadastrados', component: CardManagementPage, icon: 'home' },
      { title: 'Histórico', description: 'Confira o sado de todos os cartões cadastrados', component: CardManagementPage, icon: 'home' },
      { title: 'Extrato', description: 'Confira o sado de todos os cartões cadastrados', component: CardManagementPage, icon: 'home' },
      { title: 'Cupons', description: 'Confira o sado de todos os cartões cadastrados', component: CardManagementPage, icon: 'home' },
      { title: 'Bancos', description: 'Confira o sado de todos os cartões cadastrados', component: CardManagementPage, icon: 'home' },
      { title: 'Cashback', description: 'Confira o sado de todos os cartões cadastrados', component: CardManagementPage, icon: 'home' },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalletPage');
  }

  open(page) {
    if(page == 'HomePage') {
      this.navCtrl.setRoot(HomePage, {}, {
        animate: true,
        direction: 'back'
      });
    } else if(page == 'LoginPage') {
      this.navCtrl.setRoot(page, {}, {
        animate: true,
        direction: 'back'
      });
    } else {
      this.navCtrl.push(page, {}, {
        animate: true,
        direction: 'forward'
      });
    }
  }

}
