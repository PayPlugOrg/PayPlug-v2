import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Sim } from '@ionic-native/sim';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AlertServiceProvider } from '../../providers/alert-service/alert-service';

/**
 * Generated class for the RegisterPhonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-phone',
  templateUrl: 'register-phone.html',
})
export class RegisterPhonePage {

  form: FormGroup;
  isReady: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public translate: TranslateService,
    public formBuilder: FormBuilder,
    public platform: Platform,
    private sim: Sim,
    private authService: AuthServiceProvider,
    public alertService: AlertServiceProvider
  ) {
    this.form = formBuilder.group({
      phone: ['', Validators.required]
    });
    this.form.valueChanges.subscribe((v) => {
      this.isReady = this.form.valid;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPhonePage');
  }

  sendSms() {
    if (this.platform.is('cordova')) {
      this.sim.requestReadPermission().then(() => {
        console.log('Permission granted');

        this.sim.getSimInfo().then((info) => {
          console.log('Sim info: ', info);

          this.authService.phoneCheck({ info: info, number: this.form.value }).then((res) => {
            console.log('res' + res);
            if (res['Success']) {
              this.navCtrl.push('RegisterPhoneCheckPage', {}, {
                animate: true,
                direction: 'forward'
              });
            } else {
              let alert = this.alertService.alertCtrl.create({
                title: 'Erro',
                message: 'Algum erro no servidor está impedindo o prosseguimento.',
                buttons: ['OK']
              });
              alert.present();
            }
          })


        }, (err) => {
          console.log('Unable to get sim info: ', err);
          let alert = this.alertService.alertCtrl.create({
            title: 'Acesso de negado',
            message: 'Devido a negativa de acesso às informações do SIM, não será possível prosseguir com a instalação do aplicativo.',
            buttons: ['OK']
          });
          alert.present();
        });
      }, () => {
        console.log('Permission denied');
      });
    }
  }

}
