import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LoggedinPage } from '../pages/loggedin/loggedin';
import { RegisterPage } from '../pages/register/register';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {RealtimedataPage} from "../pages/realtimedata/realtimedata";
import {ManagePage} from "../pages/manage/manage";
import {AngularFireDatabaseModule} from "angularfire2/database";
import { IonicStorageModule } from '@ionic/storage';


const firebaseAuth = {
  apiKey: "AIzaSyDLbC1zGwwORYSeXNpaszglqL-zw4byRcM",
  authDomain: "smartgreenhouse-f919a.firebaseapp.com",
  databaseURL: "https://smartgreenhouse-f919a.firebaseio.com",
  projectId: "smartgreenhouse-f919a",
  storageBucket: "smartgreenhouse-f919a.appspot.com",
  messagingSenderId: "563079342427"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    RealtimedataPage,
    ManagePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    RealtimedataPage,
    ManagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage
  ]
})
export class AppModule {}
