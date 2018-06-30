import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


/**
 * Generated class for the AskAQuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ask-a-question',
  templateUrl: 'ask-a-question.html',
})
export class AskAQuestionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AskAQuestionPage');
  }
  goSubmit() {
    const toast = this.toastCtrl.create({
      message: 'Sent successfully',
      duration: 2000,
      
    });
    toast.present();
  }
}
