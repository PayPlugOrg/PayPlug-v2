import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LandingPage } from '../pages/landing/landing';
import { LandingPageModule } from '../pages/landing/landing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ResetPasswordPageModule } from '../pages/reset-password/reset-password.module';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { RegisterPhonePage } from '../pages/register-phone/register-phone';
import { RegisterPhonePageModule } from '../pages/register-phone/register-phone.module';
import { RegisterPhoneCheckPageModule } from '../pages/register-phone-check/register-phone-check.module';
import { RegisterPhoneCheckPage } from '../pages/register-phone-check/register-phone-check';
import { RegisterOptionsPageModule } from '../pages/register-options/register-options.module';
import { RegisterOptionsPage } from '../pages/register-options/register-options';
import { RegisterBusinessPageModule } from '../pages/register-business/register-business.module';
import { RegisterBusinessPage } from '../pages/register-business/register-business';
import { RegisterBusinessAddressPageModule } from '../pages/register-business-address/register-business-address.module';
import { RegisterBusinessAddressPage } from '../pages/register-business-address/register-business-address';
import { RegisterCardReminderPageModule } from '../pages/register-card-reminder/register-card-reminder.module';
import { RegisterCardReminderPage } from '../pages/register-card-reminder/register-card-reminder';
import { CardCreatePage } from '../pages/card-create/card-create';
import { CardCreatePageModule } from '../pages/card-create/card-create.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    LandingPageModule,
    ResetPasswordPageModule,
    RegisterPhonePageModule,
    RegisterOptionsPageModule,
    RegisterPhoneCheckPageModule,
    RegisterBusinessPageModule,
    RegisterBusinessAddressPageModule,
    RegisterCardReminderPageModule,
    CardCreatePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LandingPage,
    ResetPasswordPage,
    RegisterPhoneCheckPage,
    RegisterOptionsPage,
    RegisterBusinessPage,
    RegisterBusinessAddressPage,
    RegisterPhonePage,
    RegisterCardReminderPage,
    CardCreatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
