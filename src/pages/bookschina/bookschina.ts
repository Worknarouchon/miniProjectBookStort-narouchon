import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { BookschinadetailPage } from '../../pages/bookschinadetail/bookschinadetail';


@IonicPage()
@Component({
  selector: 'page-bookschina',
  templateUrl: 'bookschina.html',
})
export class BookschinaPage {
  bookschina:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public data:BooksProvider) {
    this.data.loadbookschina().then(result=>{
      this.bookschina=result;
      console.log(result);
    });
  }

  showDetal(id){
    this.navCtrl.push(BookschinadetailPage,{code:id});
  }
  goToBookschinadetailPage(book_id:any){
   
    this.navCtrl.push(BookschinadetailPage,{ id:book_id });
  }

}