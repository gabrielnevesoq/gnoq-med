import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VetNovoPacienteComponent } from 'src/app/components/vet-novo-paciente/vet-novo-paciente.component';
import { Supabase } from 'src/app/services/supabase/supabase';

@Component({
  selector: 'app-vet-pacientes',
  templateUrl: './vet-pacientes.page.html',
  styleUrls: ['./vet-pacientes.page.scss'],
  standalone: false,
  providers: [Supabase]
})
export class VetPacientesPage implements OnInit {
  constructor(private supabase: Supabase, private modalCtrl: ModalController) { }
  ngOnInit() {
    this.GetVetPacientes();
  }

  // Open modal
  async OpenModal() {
    const modal = this.modalCtrl.create({
      component: VetNovoPacienteComponent,
      cssClass : 'custom-modal',
    });
    (await modal).present();
  }

  public badge_color: string = "green";

  // GET: Vet | Pacientes
  public pacientes: any[] = [];
  async GetVetPacientes() {
    const {data, error} = await this.supabase.GetVetPacientes();
    if (error) {
      console.error(error);
    } else {
      this.pacientes = data;
    }
  }
}