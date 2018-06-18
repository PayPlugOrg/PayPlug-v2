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
        oldMail: ["", Validators.required, Validators.email],
        newMail: ["", Validators.required, Validators.email],
        confirmMail: ["", Validators.required, Validators.email]
      });
    } else if (item.title === "TELEFONE") {
      this.formTelefone = this.formBuilder.group({
        oldPhone: ["", Validators.required],
        newPhone: ["", Validators.required],
        confirmPhone: ["", Validators.required]
      });
    } else if (item.title === "SENHA") {
      this.formSenha = this.formBuilder.group({
        oldPassword: ["", Validators.required],
        newPassword: ["", Validators.required],
        confirmPassword: ["", Validators.required]
      });
    } else if (item.title === "ENDEREÇO") {
      this.formEndereco = this.formBuilder.group({
        addressCep: ["", Validators.required],
        address: ["", Validators.required],
        addressNumber: ["", Validators.required],
        addressComplement: ["", Validators.required],
        addressCity: ["", Validators.required],
        addressState: ["", Validators.required]
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
