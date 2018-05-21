import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RealtimedataPage } from './realtimedata';

@NgModule({
  declarations: [
    RealtimedataPage,
  ],
  imports: [
    IonicPageModule.forChild(RealtimedataPage),
  ],
  exports: [
    RealtimedataPage
  ]
})
export class RealtimedataPageModule {}
