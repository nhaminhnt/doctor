import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { AboutUsPage } from '../pages/about-us/about-us';
import { CategoriesPage } from '../pages/categories/categories';
import { AddAMedicineRecordPage } from '../pages/add-a-medicine-record/add-a-medicine-record';
import { AskAQuestionPage } from '../pages/ask-a-question/ask-a-question';
import { BookAnPointmentPage } from '../pages/book-an-pointment/book-an-pointment';
import { ChatWithDoctorPage } from '../pages/chat-with-doctor/chat-with-doctor';
import { SetMedicineReminderPage } from '../pages/set-medicine-reminder/set-medicine-reminder';
import { AddRecordedPage } from '../pages/add-recorded/add-recorded';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    AboutUsPage,
    CategoriesPage,
    AddAMedicineRecordPage,
    AskAQuestionPage,
    BookAnPointmentPage,
    ChatWithDoctorPage,
    SetMedicineReminderPage,
    AddRecordedPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    AboutUsPage,
    CategoriesPage,
    AddAMedicineRecordPage,
    AskAQuestionPage,
    BookAnPointmentPage,
    ChatWithDoctorPage,
    SetMedicineReminderPage,
    AddRecordedPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
