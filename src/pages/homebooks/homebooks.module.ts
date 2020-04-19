import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomebooksPage } from './homebooks';

@NgModule({
  declarations: [
    HomebooksPage,
  ],
  imports: [
    IonicPageModule.forChild(HomebooksPage),
  ],
})
export class HomebooksPageModule {}
