import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { CardPageModule } from '../pages/card/card.module';
import { FabListaPageModule } from '../pages/fab-lista/fab-lista.module';
import { AvatarPageModule } from '../pages/avatar/avatar.module';
import { ModalPageModule } from '../pages/modal/modal.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    CardPageModule,
    FabListaPageModule,
    AvatarPageModule,
    ModalPageModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
