import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFireDatabase } from "angularfire2/database";

/**
 * Generated class for the RealtimedataPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-realtimedata',
  templateUrl: 'realtimedata.html',
})
export class RealtimedataPage {

  arrData = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
    this.db.list("/").subscribe(data => {
      this.arrData = data;

    });
  }
}
