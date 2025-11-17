import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VetPacientesPageRoutingModule } from './vet-pacientes-routing.module';

import { VetPacientesPage } from './vet-pacientes.page';
import { SidemenuComponent } from 'src/app/components/sidemenu/sidemenu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VetPacientesPageRoutingModule,
    SidemenuComponent
  ],
  declarations: [VetPacientesPage]
})
export class VetPacientesPageModule {}
