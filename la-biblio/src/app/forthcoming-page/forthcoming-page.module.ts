import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForthcomingPagePageRoutingModule } from './forthcoming-page-routing.module';

import { ForthcomingPagePage } from './forthcoming-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForthcomingPagePageRoutingModule
  ],
  declarations: [ForthcomingPagePage]
})
export class ForthcomingPagePageModule {}
