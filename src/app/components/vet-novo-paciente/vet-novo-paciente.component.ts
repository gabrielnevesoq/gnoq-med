import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { Alert } from 'src/app/services/alert';

@Component({
  selector: 'app-vet-novo-paciente',
  templateUrl: './vet-novo-paciente.component.html',
  styleUrls: ['./vet-novo-paciente.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule]
})
export class VetNovoPacienteComponent  implements OnInit {
  constructor(private modalCtrl: ModalController, private toast: Alert) {}
  ngOnInit() {}

  // Close modal
  CloseModal() {
    const modal = this.modalCtrl.dismiss();
    return modal;
  }
}