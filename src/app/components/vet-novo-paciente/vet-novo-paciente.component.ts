import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { Alert } from 'src/app/services/alert';
import { Supabase } from 'src/app/services/supabase/supabase';

@Component({
  selector: 'app-vet-novo-paciente',
  templateUrl: './vet-novo-paciente.component.html',
  styleUrls: ['./vet-novo-paciente.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
  providers: [Supabase]
})
export class VetNovoPacienteComponent  implements OnInit {
  constructor(private modalCtrl: ModalController, private toast: Alert, private supabase: Supabase) {}
  ngOnInit() {}

  // Close modal
  CloseModal() {
    const modal = this.modalCtrl.dismiss();
    return modal;
  }

  // Cadastro de paciente
  public nome : string = "";
  public tipo : string = "";
  public idade: string = "";
  public ultima_consulta: string = "";
  async InsertPaciente() {
    const {error} = await this.supabase.InsertPaciente(this.nome, this.tipo, this.idade, this.ultima_consulta);
    if (error) {
      this.toast.error("Erro ao inserir. Tente novamente mais tarde.");
    } else {
      this.toast.success("Sucesso ao cadastrar paciente!");
      window.location.reload();
    }
  }
}