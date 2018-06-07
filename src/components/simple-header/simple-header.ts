import { Component, Input } from "@angular/core";
import { PageProvider } from "../../providers/page/page";

/**
 * Generated class for the SimpleHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "simple-header",
  templateUrl: "simple-header.html"
})
export class SimpleHeaderComponent {
  firstName: string;
  @Input() message = true;
  @Input() cart = true;

  constructor(public pageProvider: PageProvider) {
    this.firstName = localStorage.getItem("firstname");
  }

  open(page) {
    this.pageProvider.open(page, {}, "forward");
  }
}
