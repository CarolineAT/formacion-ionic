import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FabListaPageRoutingModule } from './fab-lista-routing.module';

import { FabListaPage } from './fab-lista.page';

@NgModule({
  declarations: [FabListaPage],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FabListaPageRoutingModule
  ],
  
  exports: [
    FabListaPage
  ],
})
export class FabListaPageModule {}
