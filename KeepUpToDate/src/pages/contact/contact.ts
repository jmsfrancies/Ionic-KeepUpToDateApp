import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ContactsServiceProvider} from '../../providers/contacts-service/contacts-service';
import { ContactsInputDialogServiceProvider } from '../../providers/contacts-input-dialog-service/contacts-input-dialog-service';


@Component({
  selector: 'page-Contact',
  templateUrl: 'Contact.html'
})
export class ContactPage {

  title = "Contact";

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: ContactsServiceProvider, public inputDialogService: ContactsInputDialogServiceProvider) {

  }

  loadItems() {
    return this.dataService.getItems();
  }

  removeItem(item, index) {
    console.log("Removing Contact - ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Removing Contact - ' + index + " ...",
      duration: 3000
    });
    toast.present();

    this.dataService.removeItem(index);  
  }

  editItem(item, index) {
    console.log("Edit Item - ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Editing Item - ' + index + " ...",
      duration: 3000
    });
    toast.present();
    this.inputDialogService.showPrompt(item, index);
  }  

  addItem(item) {
    console.log("Adding Item");
    this.inputDialogService.showPrompt();
  }



}

