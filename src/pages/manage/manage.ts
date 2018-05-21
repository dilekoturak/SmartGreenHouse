import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database";

/**
 * Generated class for the ManagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-manage',
  templateUrl: 'manage.html',
})
export class ManagePage {

  public toggle: boolean = false ;
  arrData = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
    this.db.list("/").subscribe(data => {
      this.arrData = data;

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagePage');
  }

  change() {
    if (this.toggle == true) {
      this.db.object("/user").set("1");
      console.log("user active");
    }else if (this.toggle == false) {
      this.db.object("/user").set("0");
      console.log("user passive");
    }
  }

  fanOpen() {
    this.db.object("/fan").set("1");
  }

  fanClose() {
    this.db.object("/fan").set("2");
  }

  isikOpen() {
    this.db.object("/isik").set("1");
  }

  isikClose() {
    this.db.object("/isik").set("2");
  }

  isiticiOpen() {
    this.db.object("/isitici").set("1");
  }

  isiticiClose() {
    this.db.object("/isitici").set("2");
  }

  kapakOpen() {
    this.db.object("/kapak").set("1");
  }

  kapakClose() {
    this.db.object("/kapak").set("2");
  }

  pompaOpen() {
    this.db.object("/pompa").set("1");
  }

  pompaClose() {
    this.db.object("/pompa").set("2");
  }
}
