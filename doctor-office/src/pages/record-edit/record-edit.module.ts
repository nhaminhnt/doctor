import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecordEditPage } from './record-edit';

@NgModule({
  declarations: [
    RecordEditPage,
  ],
  imports: [
    IonicPageModule.forChild(RecordEditPage),
  ],
})
export class RecordEditPageModule {}
