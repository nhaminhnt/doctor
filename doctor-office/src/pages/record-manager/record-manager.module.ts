import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecordManagerPage } from './record-manager';

@NgModule({
  declarations: [
    RecordManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(RecordManagerPage),
  ],
})
export class RecordManagerPageModule {}
