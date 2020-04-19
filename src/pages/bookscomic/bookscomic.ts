import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { BookscomicdetailPage } from '../bookscomicdetail/bookscomicdetail';

@IonicPage()
@Component({
  selector: 'page-bookscomic',
  templateUrl: 'bookscomic.html',
})
export class BookscomicPage {
  bookscomic:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public data:BooksProvider) {
    this.data.loadbookscomic().then(result=>{
      this.bookscomic=result;
      console.log(result);
    });
  }

  showDetal(id){
    this.navCtrl.push(BookscomicdetailPage,{code:id});
  }
  goToBookscomicdetailPage(book_id:any){
   
    this.navCtrl.push(BookscomicdetailPage,{ id:book_id });
  }

}