import { Component, ViewChild } from "@angular/core";
import { Platform, Config, Nav, AlertController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";
import { TranslateService } from "@ngx-translate/core";
import { FooterComponent } from "../components/footer/footer";
@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any = HomePage;
  privatePages: any;
  @ViewChild(Nav) nav: Nav;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private translate: TranslateService,
    private config: Config,
    public alertCtrl: AlertController
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.initTranslate();

    this.privatePages = [
      {
        title: "Carrinho",
        // description: "Confira o sado de todos os cartões cadastrados",
        component: "CartPage"
        // icon: "home"
      },
      {
        title: "Carteira",
        // description: "Confira o sado de todos os cartões cadastrados",
        component: "WalletPage"
        // icon: "home"
      },
      {
        title: "Cartões",
        // description: "Confira o sado de todos os cartões cadastrados",
        component: "CardManagementPage"
        // icon: "home"
      },
      {
        title: "Cobrar",
        // description: "Confira o sado de todos os cartões cadastrados",
        component: "BillingPage"
        // icon: "home"
      },
      {
        title: "Cupons",
        // description: "Confira o sado de todos os cartões cadastrados",
        component: "TicketPage"
        // icon: "home"
      },
      {
        title: "Dúvidas Frequentes",
        // description: "Confira o sado de todos os cartões cadastrados",
        component: "FaqPage"
        // icon: "home"
      },
      {
        title: "Extrato",
        // description: "Confira o sado de todos os cartões cadastrados",
        component: "ReportPage"
        // icon: "home"
      },
      {
        title: "Indicar Usuário",
        // description: "Confira o sado de todos os cartões cadastrados",
        component: "InvitePage"
        // icon: "home"
      },
      {
        title: "Meu Perfil",
        // description: "Confira o sado de todos os cartões cadastrados",
        component: "ProfilePage"
        // icon: "home"
      },
      {
        title: "Ofertas em Evidência",
        // description: "Confira o sado de todos os cartões cadastrados",
        component: "TrendsPage"
        // icon: "home"
      },
      {
        title: "Pagar",
        // description: "Confira o sado de todos os cartões cadastrados",
        component: "PaymentAuthorizationPage"
        // icon: "home"
      },
      {
        title: "QRCode",
        // description: "Confira o sado de todos os cartões cadastrados",
        component: "CardManagementPage"
        // icon: "home"
      },
      {
        title: "Recuperar Senha",
        // description: "Confira o sado de todos os cartões cadastrados",
        component: "ResetPasswordPage"
        // icon: "home"
      },
      {
        title: "Saldo",
        // description: "Confira o sado de todos os cartões cadastrados",
        component: "BalancePage"
        // icon: "home"
      },
      {
        title: "Sobre",
        // description: "Confira o sado de todos os cartões cadastrados",
        component: "AboutPage"
        // icon: "home"
      },
      {
        title: "Todos Os Utilitários",
        // description: "Confira o sado de todos os cartões cadastrados",
        component: "UtilitiesPage"
        // icon: "home"
      },
      {
        title: "Transferência",
        // description: "Confira o sado de todos os cartões cadastrados",
        component: "TransferPage"
        // icon: "home"
      }
    ];
  }

  setRoot() {
    if (localStorage.getItem("token")) {
      this.rootPage = HomePage;
    } else {
      this.rootPage = "LoginPage";
    }
  }

  open(page) {
    if (page == "LoginPage") {
      this.nav.setRoot(
        page,
        {},
        {
          animate: true,
          direction: "back"
        }
      );
    } else {
      this.nav.push(
        page,
        {},
        {
          animate: true,
          direction: "forward"
        }
      );
    }
  }

  initTranslate() {
    this.translate.setDefaultLang("pt-br");
    this.translate.get(["BACK_BUTTON_TEXT"]).subscribe(values => {
      this.config.set("ios", "backButtonText", values.BACK_BUTTON_TEXT);
    });
  }

  logout() {
    const confirm = this.alertCtrl.create({
      title: "SAIR",
      message: "CONFIRMAR SAIR?",
      buttons: [
        {
          text: "NÃO",
          handler: () => {
            console.log("Disagree clicked");
          }
        },
        {
          text: "SIM",
          handler: () => {
            localStorage.removeItem("token");
            this.nav.setRoot(
              "LoginPage",
              {},
              {
                animate: true,
                direction: "back"
              }
            );
          }
        }
      ]
    });
    confirm.present();
  }
}
