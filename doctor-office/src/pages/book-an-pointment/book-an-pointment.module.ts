import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookAnPointmentPage } from './book-an-pointment';

@NgModule({
  declarations: [
    BookAnPointmentPage,
  ],
  imports: [
    IonicPageModule.forChild(BookAnPointmentPage),
  ],
})
export class BookAnPointmentPageModule {}
