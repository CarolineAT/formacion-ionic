import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FabListaPage } from './fab-lista.page';

const routes: Routes = [
  {
    path: '',
    component: FabListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FabListaPageRoutingModule {}
