import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAMedicineRecordPage } from './add-a-medicine-record';

@NgModule({
  declarations: [
    AddAMedicineRecordPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAMedicineRecordPage),
  ],
})
export class AddAMedicineRecordPageModule {}
