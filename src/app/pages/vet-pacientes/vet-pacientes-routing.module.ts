import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VetPacientesPage } from './vet-pacientes.page';

const routes: Routes = [
  {
    path: '',
    component: VetPacientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VetPacientesPageRoutingModule {}
