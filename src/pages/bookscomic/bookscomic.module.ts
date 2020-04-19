import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookscomicPage } from './bookscomic';

@NgModule({
  declarations: [
    BookscomicPage,
  ],
  imports: [
    IonicPageModule.forChild(BookscomicPage),
  ],
})
export class BookscomicPageModule {}
