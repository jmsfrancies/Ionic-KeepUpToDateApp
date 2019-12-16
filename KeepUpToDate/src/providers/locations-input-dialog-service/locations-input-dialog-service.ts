import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { LocationsServiceProvider } from '../../providers/locations-service/locations-service';
/*
  Generated class for the LocationsInputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class LocationsInputDialogServiceProvider {

  constructor(public alertCtrl: AlertController, public dataService: LocationsServiceProvider) {
    console.log('Hello LocationsInputDialogServiceProvider Provider');
  }


  showPrompt(item?, index?) {
    const prompt = this.alertCtrl.create({
      title: item ? 'Edit Location' : 'Add Location',
      message: item ? "Please edit Location..." : "Please enter Location...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item ? item.name : null
        },
        {
          name: 'location',
          placeholder: 'location',
          value: item ? item.quantity : null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            if (index !== undefined) {
              this.dataService.editItem(item, index);
            }
            else {
              this.dataService.addItem(item);
            }

          }
        }
      ]
    });
    prompt.present();
  }

}

