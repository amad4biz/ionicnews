import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ModalComponent } from './modal.component';


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      ReactiveFormsModule
     
     // CreatePageModule
    ],
    declarations: [ModalComponent],
    // entryComponents: [ModalComponent]
  })
  export class ModalComponentModule {}
  