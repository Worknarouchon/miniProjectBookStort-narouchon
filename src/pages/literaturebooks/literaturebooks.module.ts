import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LiteraturebooksPage } from './literaturebooks';

@NgModule({
  declarations: [
    LiteraturebooksPage,
  ],
  imports: [
    IonicPageModule.forChild(LiteraturebooksPage),
  ],
})
export class LiteraturebooksPageModule {}
