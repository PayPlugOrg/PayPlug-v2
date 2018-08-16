import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-cart",
  templateUrl: "cart.html"
})
export class CartPage {
  cart: boolean;
  shipColor = "gray-payplug-3";
  shops: any;
  firstName: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
    this.firstName = localStorage.getItem("firstname");
    this.shops = [
      {
        id: "1",
        name: "Bella Pizza",
        items: [
          {
            id: "1",
            description: "Pizza Grande",
            value: "35,60",
            frete: "orange-payplug"
          },
          {
            id: "2",
            description: "Refrigerante Guaraná 1 LT",
            value: "5,60",
            frete: "cinza"
          }
        ]
      },
      {
        id: "2",
        name: "CVL Informática",
        items: [
          {
            id: "1",
            description: "Fone de Ouvido Motorola",
            value: "45,00",
            frete: "cinza"
          },
          {
            id: "2",
            description: "Case HDD 2.5",
            value: "30,00",
            frete: "cinza"
          }
        ]
      }
    ];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CartPage");
  }

  ngAfterContentInit() {
    this.cart = false;
  }

  open(page) {
    this.navCtrl.push(
      page,
      {},
      {
        animate: true
      }
    );
  }

  changeShip(item) {
    console.log(item);
    if (item.frete === "cinza") {
      item.frete = "primary";
    } else if (item.frete === "primary") {
      item.frete = "cinza";
    }
    console.log(item);
  }

  deleteItem(item) {
    const confirm = this.alertCtrl.create({
      title: "EXCLUIR PRODUTO",
      message: `VOCÊ ESTÁ PRESTES A EXCLUIR ${
        item.description
      }. CONFIRMAR OPERAÇÃO?`,
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
            console.log("Agree clicked");
          }
        }
      ]
    });
    confirm.present();
  }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: "INFORMAR ENDEREÇO",
      message: "INFORME O ENDEREÇO DE ENTREGA",
      inputs: [
        {
          name: "cep",
          placeholder: "Digite seu CEP"
        },
        {
          name: "address",
          placeholder: "Endereço"
        },
        {
          name: "number",
          placeholder: "Número"
        },
        {
          name: "complement",
          placeholder: "Complemento"
        },
        {
          name: "city",
          placeholder: "Cidade"
        },
        {
          name: "state",
          placeholder: "Estado"
        }
      ],
      buttons: [
        {
          text: "CANCELAR",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "CONFIRMAR",
          handler: data => {
            console.log("Saved clicked");
          }
        }
      ]
    });
    prompt.present();
  }
}
