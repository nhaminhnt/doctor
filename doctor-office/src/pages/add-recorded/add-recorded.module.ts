import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddRecordedPage } from './add-recorded';

@NgModule({
  declarations: [
    AddRecordedPage,
  ],
  imports: [
    IonicPageModule.forChild(AddRecordedPage),
  ],
})
export class AddRecordedPageModule {}
