import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { FooterComponent } from "../../components/footer/footer";

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-menu",
  templateUrl: "menu.html"
})
export class MenuPage {
  @ViewChild(FooterComponent) child: FooterComponent;
  items: Array<{
    title: string;
    component: any;
    // description: any;
    // icon: string;
  }>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
    this.items = [
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
        title: "Ilustrações",
        // description: "Confira o sado de todos os cartões cadastrados",
        component: "CardManagementPage"
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

  open(page) {
    if (page == "UtilitiesPage") {
      this.child.open(page);
    } else if (page == "LoginPage") {
      this.navCtrl.setRoot(
        page,
        {},
        {
          animate: true,
          direction: "back"
        }
      );
    } else {
      this.navCtrl.push(
        page,
        {},
        {
          animate: true,
          direction: "forward"
        }
      );
    }
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
            this.navCtrl.setRoot(
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
