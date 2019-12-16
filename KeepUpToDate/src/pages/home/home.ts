import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LocationsServiceProvider} from '../../providers/locations-service/locations-service';
import { LocationsInputDialogServiceProvider } from '../../providers/locations-input-dialog-service/locations-input-dialog-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Locations";

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: LocationsServiceProvider, public LocationsInputDialogService: LocationsInputDialogServiceProvider) {

  }

  loadItems() {
    return this.dataService.getItems();
  }

  removeItem(item, index) {
    console.log("Removing Location - ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Removing Location - ' + index + " ...",
      duration: 3000
    });
    toast.present();

    this.dataService.removeItem(index);  
  }

  editItem(item, index) {
    console.log("Editng Location - ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Editing Location - ' + index + " ...",
      duration: 3000
    });
    toast.present();
    this.LocationsInputDialogService.showPrompt(item, index);
  }  

  addItem(item) {
    console.log("Adding Location");
    this.LocationsInputDialogService.showPrompt();
  }



}

