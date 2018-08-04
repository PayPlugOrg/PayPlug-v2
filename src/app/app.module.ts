import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { NgxQRCodeModule } from "ngx-qrcode2";

import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { LandingPage } from "../pages/landing/landing";
import { LandingPageModule } from "../pages/landing/landing.module";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { ResetPasswordPageModule } from "../pages/reset-password/reset-password.module";
import { ResetPasswordPage } from "../pages/reset-password/reset-password";
import { RegisterPhonePage } from "../pages/register-phone/register-phone";
import { RegisterPhonePageModule } from "../pages/register-phone/register-phone.module";
import { RegisterPhoneCheckPageModule } from "../pages/register-phone-check/register-phone-check.module";
import { RegisterPhoneCheckPage } from "../pages/register-phone-check/register-phone-check";
import { RegisterOptionsPageModule } from "../pages/register-options/register-options.module";
import { RegisterOptionsPage } from "../pages/register-options/register-options";
import { RegisterBusinessPageModule } from "../pages/register-business/register-business.module";
import { RegisterBusinessPage } from "../pages/register-business/register-business";
import { RegisterBusinessAddressPageModule } from "../pages/register-business-address/register-business-address.module";
import { RegisterBusinessAddressPage } from "../pages/register-business-address/register-business-address";
import { RegisterCardReminderPageModule } from "../pages/register-card-reminder/register-card-reminder.module";
import { RegisterCardReminderPage } from "../pages/register-card-reminder/register-card-reminder";
import { CardCreatePage } from "../pages/card-create/card-create";
import { CardCreatePageModule } from "../pages/card-create/card-create.module";
import { BillingPageModule } from "../pages/billing/billing.module";
import { BillingPage } from "../pages/billing/billing";
import { AuthServiceProvider } from "../providers/auth-service/auth-service";
import { AlertServiceProvider } from "../providers/alert-service/alert-service";

import { SocialSharing } from "@ionic-native/social-sharing";
import { CardManagementPageModule } from "../pages/card-management/card-management.module";
import { CardManagementPage } from "../pages/card-management/card-management";
import { CardProvider } from "../providers/card/card";
import { CardPageModule } from "../pages/card/card.module";
import { CardPage } from "../pages/card/card";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { BillingIdentificationPageModule } from "../pages/billing-identification/billing-identification.module";
import { BillingIdentificationPage } from "../pages/billing-identification/billing-identification";
import { BillingAuthorizationPage } from "../pages/billing-authorization/billing-authorization";
import { BillingAuthorizationPageModule } from "../pages/billing-authorization/billing-authorization.module";
import { CardNewPage } from "../pages/card-new/card-new";
import { CardNewPageModule } from "../pages/card-new/card-new.module";
import { ComponentsModule } from "../components/components.module";
import { PageProvider } from "../providers/page/page";
import { Sim } from "@ionic-native/sim";
import { File } from "@ionic-native/file";
import { StorePage } from "../pages/store/store";
import { StorePageModule } from "../pages/store/store.module";
import { StoreProvider } from '../providers/store/store';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "assets/i18n/", ".json");
}

@NgModule({
  declarations: [MyApp, HomePage],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    NgxQRCodeModule,
    IonicModule.forRoot(MyApp),
    LandingPageModule,
    ResetPasswordPageModule,
    RegisterPhonePageModule,
    RegisterOptionsPageModule,
    RegisterPhoneCheckPageModule,
    RegisterBusinessPageModule,
    RegisterBusinessAddressPageModule,
    RegisterCardReminderPageModule,
    CardCreatePageModule,
    BillingPageModule,
    CardManagementPageModule,
    CardPageModule,
    BillingIdentificationPageModule,
    BillingAuthorizationPageModule,
    CardNewPageModule,
    ComponentsModule,
    StorePageModule
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
    CardCreatePage,
    BillingPage,
    CardManagementPage,
    CardPage,
    BillingIdentificationPage,
    BillingAuthorizationPage,
    CardNewPage,
    StorePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthServiceProvider,
    AlertServiceProvider,
    SocialSharing,
    CardProvider,
    BarcodeScanner,
    PageProvider,
    Sim,
    File,
    StoreProvider
  ]
})
export class AppModule {}
