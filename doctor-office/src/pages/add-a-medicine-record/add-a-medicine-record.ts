import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddRecordedPage } from '../add-recorded/add-recorded';


@IonicPage()
@Component({
  selector: 'page-add-a-medicine-record',
  templateUrl: 'add-a-medicine-record.html',
})
export class AddAMedicineRecordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAMedicineRecordPage');
  }
  goToAddRecordedPage() {
    this.navCtrl.push(AddRecordedPage)
  }
}
