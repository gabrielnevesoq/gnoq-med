import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MedicamentoDetalhesComponent } from 'src/app/components/medicamento-detalhes/medicamento-detalhes.component';
import { Alert } from 'src/app/services/alert';
import { Supabase } from 'src/app/services/supabase/supabase';

@Component({
  selector: 'app-far-medicamentos',
  templateUrl: './far-medicamentos.page.html',
  styleUrls: ['./far-medicamentos.page.scss'],
  standalone: false,
  providers: [Supabase]
})
export class FarMedicamentosPage implements OnInit {
  constructor(private supabase: Supabase, private toast: Alert, private modalCtrl: ModalController) { }
  ngOnInit() {
    this.GetFarMedicamentos();
  }

  // GET: Far | Medicamentos
  public medicamentos: any[] = [];
  async GetFarMedicamentos() {
    const {data, error} = await this.supabase.GetFarMedicamentos();
    if (error) {
      this.toast.error('Erro ao recuperar dados.');
    } else {
      this.medicamentos = data;
    }
  }

  // Abrir modal de detalhes
  async DetalhesModal(nome: string, farmacocinetica: string, farmacodinamica: string, efeitos: string, interacoes: string) {
    const modal = this.modalCtrl.create({
      component: MedicamentoDetalhesComponent,
      cssClass: 'detalhes-medicamentos-modal',
      componentProps: {
        nome: nome,
        farmacocinetica: farmacocinetica,
        farmacodinamica: farmacodinamica,
        efeitos: efeitos,
        interacoes: interacoes
      }
    });
    (await modal).present();
  }
}