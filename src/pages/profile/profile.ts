import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {
  items: any = [];
  firstName: string;
  formEmail: FormGroup;
  formTelefone: FormGroup;
  formSenha: FormGroup;
  formCartoes: FormGroup;
  formEndereco: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder
  ) {
    this.items = [
      { title: "EMAIL", expanded: false },
      { title: "TELEFONE", expanded: false },
      { title: "SENHA", expanded: false },
      { title: "CARTÕES", expanded: false },
      { title: "ENDEREÇO", expanded: false }
    ];
    this.firstName = localStorage.getItem("firstname");
  }

  expandItem(item) {
    if (item.title === "EMAIL") {
      this.formEmail = this.formBuilder.group({
        oldMail: ["", Validators.required],
        newMail: ["", Validators.required],
        newMailConfirm: ["", Validators.required]
      });
    }
    this.items.map(listItem => {
      if (item == listItem) {
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }
      return listItem;
    });
  }
}
