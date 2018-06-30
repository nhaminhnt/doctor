import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AskAQuestionPage } from './ask-a-question';

@NgModule({
  declarations: [
    AskAQuestionPage,
  ],
  imports: [
    IonicPageModule.forChild(AskAQuestionPage),
  ],
})
export class AskAQuestionPageModule {}
