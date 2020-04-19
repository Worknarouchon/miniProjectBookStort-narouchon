import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SalePage } from '../sale/sale';
import { ProfilePage } from '../profile/profile';
import { NotePage } from '../note/note';
import { ContactsPage } from '../contacts/contacts';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {}

  goToSalePage(){ 
    this.navCtrl.push(SalePage);
  }

  goToProfilePage(){
    this.navCtrl.push(ProfilePage);
  }

  goToNotePage(){
    this.navCtrl.push(NotePage);
  }

  goToContactsPage(){
    this.navCtrl.push(ContactsPage);


  }
  
  
}