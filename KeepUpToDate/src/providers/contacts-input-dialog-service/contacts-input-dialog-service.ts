import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { ContactsServiceProvider } from '../../providers/contacts-service/contacts-service';

/*
  Generated class for the ContactsInputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactsInputDialogServiceProvider {

  constructor(public alertCtrl: AlertController, public dataService: ContactsServiceProvider) {
    console.log('Hello ContactsInputDialogServiceProvider Provider');
  }


  showPrompt(item?, index?) {
    const prompt = this.alertCtrl.create({
      title: item ? 'Edit item' : 'Add item',
      message: item ? "Please edit contact..." : "Please enter contact...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item ? item.name : null
        },
        {
          name: 'number',
          placeholder: 'number',
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

