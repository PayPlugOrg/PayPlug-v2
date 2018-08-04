import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

/**
 * Generated class for the CardNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-card-new",
  templateUrl: "card-new.html"
})
export class CardNewPage {
  formCard: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    formBuilder: FormBuilder
  ) {
    this.formCard = formBuilder.group({
      valid: [null, Validators.required],
      number: [null, Validators.required],
      holder: [null, Validators.required],
      cvv: [null, Validators.required],
      cell: [null, Validators.required],
      cpf: [null, Validators.required],
      type: [null, Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CardNewPage");
  }
}
