import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { SaledetailPage } from '../../pages/saledetail/saledetail';



@IonicPage()
@Component({
  selector: 'page-bookscomicdetail',
  templateUrl: 'bookscomicdetail.html',
})
export class BookscomicdetailPage {
  book:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: BooksProvider) {
    console.log(navParams);
    var id = this.navParams.get('id');
    this.data.Idbookscomic(id).then(res=>{
      this.book=res;
    });
  }
  gotoSaledetailPage(){
    this.navCtrl.push(SaledetailPage);
  }

} 