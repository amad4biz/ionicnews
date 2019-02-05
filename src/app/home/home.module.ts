import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



import { HomePage } from './home.page';

import { ModalComponentModule } from '../modal/modal.module';
import {ModalComponent} from '../modal/modal.component';
//import {CreatePageModule} from '../create/create.module'
//import { CreatePage } from '../create/create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),

   // CreatePageModule
  ],
  declarations: [HomePage],
  entryComponents: [ModalComponent]
})
export class HomePageModule {}
