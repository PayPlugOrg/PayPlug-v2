import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertServiceProvider } from '../../providers/alert-service/alert-service';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  form: FormGroup;
  isReady: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertService: AlertServiceProvider,
    public authService: AuthServiceProvider,
    public formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.form.controls['username'].setValue(localStorage.getItem('login'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.alertService.showLoader('Validando acesso...');
    this.authService.login(this.form.value).then((result) => {
      this.alertService.loading.dismiss();
      var data = result;
      if (data) {
        console.log(data['Token']);
        localStorage.setItem('token', data['Token']);
        localStorage.setItem('login', this.form.value['username']);
        this.authService.getUserData();
        this.navCtrl.setRoot(HomePage, {}, {
          animate: true,
          direction: 'forward'
        })
      }
    }, (err) => {
      this.alertService.loading.dismiss();
      this.alertService.presentToast(err);
    });
  }

  register() {
    this.navCtrl.push('RegisterPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  resetPassword() {
    this.navCtrl.push('ResetPasswordPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

}
