import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocationsServiceProvider } from '../providers/locations-service/locations-service';
import { LocationsInputDialogServiceProvider } from '../providers/locations-input-dialog-service/locations-input-dialog-service';
import { ContactsServiceProvider } from '../providers/contacts-service/contacts-service';
import { ContactsInputDialogServiceProvider } from '../providers/contacts-input-dialog-service/contacts-input-dialog-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocationsServiceProvider,
    LocationsInputDialogServiceProvider,
    ContactsServiceProvider,
    ContactsInputDialogServiceProvider
  ]
})
export class AppModule {}
