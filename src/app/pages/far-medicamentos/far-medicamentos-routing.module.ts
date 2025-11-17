import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarMedicamentosPage } from './far-medicamentos.page';

const routes: Routes = [
  {
    path: '',
    component: FarMedicamentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarMedicamentosPageRoutingModule {}
