import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddAMedicineRecordPage } from '../add-a-medicine-record/add-a-medicine-record';
import { AskAQuestionPage } from '../ask-a-question/ask-a-question';
import { BookAnPointmentPage } from '../book-an-pointment/book-an-pointment';
import { ChatWithDoctorPage } from '../chat-with-doctor/chat-with-doctor';
import { SetMedicineReminderPage } from '../set-medicine-reminder/set-medicine-reminder';


@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }
  goToBookAnPointmentPage() {
    this.navCtrl.push(BookAnPointmentPage)
    
  }
  goToChatWithDoctorPage() {
    this.navCtrl.push(ChatWithDoctorPage)

  }
  goToAskAQuestionPage() {
    this.navCtrl.push(AskAQuestionPage)
  }
  goToAddAMedicineRecordPage() {
    this.navCtrl.push(AddAMedicineRecordPage)
  }
  goToSetMedicineReminderPage() {
    this.navCtrl.push(SetMedicineReminderPage)
  }
}
