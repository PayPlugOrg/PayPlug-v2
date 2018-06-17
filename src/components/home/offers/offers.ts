import { Component } from "@angular/core";
import { ViewChild } from "@angular/core";
import { Slides } from "ionic-angular";

/**
 * Generated class for the OffersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "offers",
  templateUrl: "offers.html"
})
export class OffersComponent {
  text: string;
  @ViewChild(Slides) slides: Slides;

  constructor() {
    console.log("Hello OffersComponent Component");
    this.text = "Hello World";
  }

  goToSlide() {
    this.slides.slideTo(2, 500);
  }
}
