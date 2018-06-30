import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatWithDoctorPage } from './chat-with-doctor';

@NgModule({
  declarations: [
    ChatWithDoctorPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatWithDoctorPage),
  ],
})
export class ChatWithDoctorPageModule {}
