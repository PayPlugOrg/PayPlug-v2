import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the BillingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-billing',
  templateUrl: 'billing.html',
})
export class BillingPage {

  private value = "";
  private origem = "06531328592"
  private createdCode = "https://www.payplug.org:88/Lkn/Ctnr?o=" + this.origem + "&d=&v=" + this.value;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BillingPage');
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

  action() {
    
  }

}
