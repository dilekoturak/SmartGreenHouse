import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {RealtimedataPage} from "../realtimedata/realtimedata";
import {ManagePage} from "../manage/manage";
import {AngularFireDatabase } from "angularfire2/database";

/**
 * Generated class for the LoggedinPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-loggedin',
  templateUrl: 'loggedin.html',
})
export class LoggedinPage {

  arrData = []

  constructor(public navCtrl: NavController, private db: AngularFireDatabase) {

    this.db.list("/").subscribe(data => {
      this.arrData = data;

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoggedinPage');
  }

  manage() {
    this.db.object("/user").set("0");
    this.navCtrl.push(ManagePage);
  }

  realtime() {
    this.navCtrl.push(RealtimedataPage);
  }

}
