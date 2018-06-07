import { Component, ViewChild, ElementRef } from "@angular/core";
import { NavController, NavParams, Platform } from "ionic-angular";
import { LandingPage } from "../landing/landing";
import { AlertServiceProvider } from "../../providers/alert-service/alert-service";
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";

declare var google;
let map: any;
let infowindow: any;
let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  firstName: string;
  saldoTotal = "";
  saldoSaque = "";
  @ViewChild("map") mapElement: ElementRef;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertService: AlertServiceProvider,
    public authService: AuthServiceProvider,
    public platform: Platform
  ) {
    this.firstName = localStorage.getItem("firstname");
    this.alertService.showLoader("Validando acesso...");
    platform.ready().then(() => {
      this.initMap();
    });
  }

  ionViewWillEnter() {
    if (!localStorage.getItem("token")) {
      setTimeout(() => {
        this.navCtrl.setRoot(LandingPage);
      });
    } else {
      this.authService.getUserInfo().then(result => {
        console.log((this.firstName = result["Nome"].split(" ")[0]));
        localStorage.setItem("firstname", result["Nome"].split(" ")[0]);
        this.firstName = result["Nome"].split(" ")[0];
        this.saldoTotal = result["SaldoTotal"];
        this.saldoSaque = result["SaldoDisponivelSaque"];
      });
    }
    this.alertService.loading.dismiss();
  }

  open(page) {
    var params = {};
    var direction = "forward";
    if (page == "PaymentAuthorizationPage") {
      params = {
        message:
          "Informe a senha de liberação para ter acesso aos seus cartões",
        label: "Senha de Liberação",
        page: "CardManagementPage"
      };
    } else if (page == "MenuPage") {
      direction = "back";
    }
    this.navCtrl.push(page, params, {
      animate: true,
      direction: direction
    });
  }

  initMap() {
    navigator.geolocation.getCurrentPosition(
      location => {
        map = new google.maps.Map(this.mapElement.nativeElement, {
          center: {
            lat: location.coords.latitude,
            lng: location.coords.longitude
          },
          zoom: 15
        });

        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch(
          {
            location: {
              lat: location.coords.latitude,
              lng: location.coords.longitude
            },
            radius: 1000,
            type: ["store"]
          },
          (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              for (var i = 0; i < results.length; i++) {
                this.createMarker(results[i]);
              }
            }
          }
        );
      },
      error => {
        console.log(error);
      },
      options
    );
  }

  createMarker(place) {
    var placeLoc = place.geometry.location;
    var image = {
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };
    var marker = new google.maps.Marker({
      map: map,
      position: placeLoc,
      icon: image
    });
    console.log(place);
    google.maps.event.addListener(marker, "click", function() {
      // infowindow.setContent(place.name);
      // infowindow.open(map, this);
      infowindow.setContent(
        "<div><strong>" +
          place.name +
          "</strong><br>" +
          "Place ID: " +
          place.place_id +
          "<br>" +
          place.vicinity +
          "</div>"
      );
      infowindow.open(map, this);
    });
  }
}
