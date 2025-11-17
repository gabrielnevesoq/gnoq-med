import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarMedicamentosPageRoutingModule } from './far-medicamentos-routing.module';

import { FarMedicamentosPage } from './far-medicamentos.page';
import { SidemenuComponent } from 'src/app/components/sidemenu/sidemenu.component';
import { MedicamentoDetalhesComponent } from 'src/app/components/medicamento-detalhes/medicamento-detalhes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarMedicamentosPageRoutingModule,
    SidemenuComponent,
    MedicamentoDetalhesComponent
  ],
  declarations: [FarMedicamentosPage]
})
export class FarMedicamentosPageModule {}
