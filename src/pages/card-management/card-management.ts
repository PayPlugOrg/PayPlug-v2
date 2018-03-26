import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { CardProvider } from '../../providers/card/card';

/**
 * Generated class for the CardManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card-management',
  templateUrl: 'card-management.html',
})
export class CardManagementPage {

  private cards: any;

  messages: any = { validDate: 'valid\ndate', monthYear: 'mm/yyyy' };
  placeholders: any = { number: '•••• •••• •••• ••••', name: 'Full Name', expiry: '••/••', cvc: '•••' };
  masks: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public cardProvider: CardProvider,
    public alertCtrl: AlertController
  ) {
    this.cardProvider.getCards(localStorage.getItem('cpf')).then((result) => {
      this.cards = result;
    });

  }

  openCard(card) {
    var params = {
      message: 'Informe a senha de liberação do cartão Principal para realizar o pagamento com o cartão PayPlug.',
      label: 'Senha de Liberação',
      card: card,
      page: 'CardPage'
    }

    if (card['tipoCartao'] == 'Crédito' || card['tipoCartao'] == 'Débito') {
      params.message = 'Informe o CVV do seu cartão final ' + card['numero'] + ' para realizar o pagamento.';
      params.label = 'CVV'
    }

    if (localStorage.getItem('card-' + card['idCartao'])) {
      this.navCtrl.push('CardPage', { card: card },{
        animate: true,
        direction: 'forward'
      });
    } else {
      this.navCtrl.push('PaymentAuthorizationPage', params,{
        animate: true,
        direction: 'forward'
      });
    }

  }

  clearInfoCard(card: any) {

    let confirm = this.alertCtrl.create({
      title: 'Limpar senha do cartão final ' + card['idCartao'] + '?',
      message: 'Ao usar esse cartão para uma nova transação, informe sua senha ou CVV novamente',
      buttons: [
        {
          text: 'Cancela',
          handler: () => {

          }
        },
        {
          text: 'Confirma',
          handler: () => {
            localStorage.removeItem('card-' + card['idCartao']);
          }
        }
      ]
    });
    confirm.present();
  }

  deleteCard(card: any) {

    let confirm = this.alertCtrl.create({
      title: 'Excluir cartão final ' + card['idCartao'] + '?',
      message: 'Seu cartão será excluído do sistema. Para inserir novos cartões vá até Cartões > Novo Cartão no menu lateral',
      buttons: [
        {
          text: 'Cancela',
          handler: () => {

          }
        },
        {
          text: 'Confirma',
          handler: () => {
            localStorage.removeItem('card-' + card['idCartao']);

            this.cardProvider.deleteCard(card['idCartao']).then((result) => {
              if (result['Success']) {
                let alert = this.authService.alertService.alertCtrl.create({
                  title: 'Cartão excluído!',
                  subTitle: result['Message'],
                  buttons: ['Ok']
                })
                alert.present();
                this.cardProvider.getCards(this.authService.userInfo['CpfCnpj']).then((result) => {
                  this.cards = result;
                });
              }
            }, (err) => {
              let alert = this.authService.alertService.alertCtrl.create({
                title: 'Falha ao excluir o cartão!',
                subTitle: err,
                buttons: ['Ok']
              })
              alert.present();
            });
          }
        }
      ]
    });
    confirm.present();


  }

}
