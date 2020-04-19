import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Toast } from '@ionic-native/toast';

import { HttpModule } from '@angular/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { BooksProvider } from '../providers/books/books';
import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BookschinaPage } from '../pages/bookschina/bookschina';
import { BookscomicPage } from '../pages/bookscomic/bookscomic';
import { YunovelbookPage } from '../pages/yunovelbook/yunovelbook';
import { HomebooksPage } from '../pages/homebooks/homebooks';
import { LiteraturebooksPage } from '../pages/literaturebooks/literaturebooks';
import { BookschinadetailPage } from '../pages/bookschinadetail/bookschinadetail';
import { LiteraturebooksdetailPage } from '../pages/literaturebooksdetail/literaturebooksdetail';
import { HomebooksdetailPage } from '../pages/homebooksdetail/homebooksdetail';
import { BookscomicdetailPage } from '../pages/bookscomicdetail/bookscomicdetail';
import { YunovelbookdetailPage } from '../pages/yunovelbookdetail/yunovelbookdetail';
import { SalePage } from '../pages/sale/sale';
import { ProfilePage } from '../pages/profile/profile';
import { NotePage } from '../pages/note/note';
import { ContactsPage } from '../pages/contacts/contacts';
import { SaledetailPage } from '../pages/saledetail/saledetail';
import { IonicStorageModule } from '@ionic/storage';
import { NewsPage } from '../pages/news/news';
import { NewsdetailPage } from '../pages/newsdetail/newsdetail';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BookschinaPage,BookscomicPage,YunovelbookPage,HomebooksPage,LiteraturebooksPage,
    BookschinadetailPage,LiteraturebooksdetailPage,HomebooksdetailPage,BookscomicdetailPage,YunovelbookdetailPage,
    SalePage,ProfilePage,NotePage,ContactsPage,SaledetailPage,
    NewsPage,NewsdetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    HttpModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BookschinaPage,BookscomicPage,YunovelbookPage,HomebooksPage,LiteraturebooksPage,
    BookschinadetailPage,LiteraturebooksdetailPage,HomebooksdetailPage,BookscomicdetailPage,YunovelbookdetailPage,
    SalePage,ProfilePage,NotePage,ContactsPage,SaledetailPage,
    NewsPage,NewsdetailPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BooksProvider,Toast,Camera
  ]
})
export class AppModule {}
