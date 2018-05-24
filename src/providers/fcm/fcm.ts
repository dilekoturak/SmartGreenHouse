import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {AngularFireDatabase} from "angularfire2/database";
import {Platform} from "ionic-angular";
/*
  Generated class for the FcmProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FcmProvider {

  constructor(public http: Http,
              public firebaseNative: AngularFireDatabase,
              public afs: Storage,
              private platform: Platform) {
    console.log('Hello FcmProvider Provider');
  }

}
