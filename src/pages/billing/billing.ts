import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SocialSharing } from '@ionic-native/social-sharing';
import StringMask from 'string-mask';

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

  formatter = new StringMask('###.###.###,##', { reverse: true });
  private origem = localStorage.getItem('cpf');
  private createdCode = "https://www.payplug.org:88/Lkn/Ctnr?o=" + this.origem + "&d=&v=";
  username = localStorage.getItem('username');
  form: FormGroup;
  valor: string = "";
  rawValue = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private socialSharing: SocialSharing
  ) {
    this.form = formBuilder.group({
      value: ['', Validators.required]
    });
    this.form.valueChanges.subscribe((v) => {

    });
  }

  onInputTime(ev: any) {
    var reg = /[0-9]+/gi;
    if (ev.length <= 16) {
     // console.log(ev);
      this.rawValue = ev.replace(/(R\$ )|(\.)|(,)/gi, '');
      
      if (reg.test(this.rawValue)) {
        //console.log(this.rawValue);
        this.createdCode = "https://www.payplug.org:88/Lkn/Ctnr?o=" + this.origem + "&d=&v=";
        this.createdCode = this.createdCode + this.rawValue;
      }
      var formattedValue = this.formatter.apply(this.rawValue);
      //console.log(formattedValue);
      this.valor = "R$ " + formattedValue;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BillingPage');
  }

  open(page) {
    if (page == 'HomePage') {
      this.navCtrl.setRoot(HomePage, {}, {
        animate: true,
        direction: 'back'
      });
    } else if (page == 'LoginPage') {
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

  send() {
    this.navCtrl.push('BillingIdentificationPage', {rawValue: this.rawValue, operation: 'Cobrança'}, {
      animate: true,
      direction: 'forward'
    });
  }

  actionTrigger(execute) {
    console.log(execute);
    if (execute == 'share') {
      this.socialSharing.share(this.createdCode);
    }
  }

}
