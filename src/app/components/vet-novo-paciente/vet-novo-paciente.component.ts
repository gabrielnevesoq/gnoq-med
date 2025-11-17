import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-vet-novo-paciente',
  templateUrl: './vet-novo-paciente.component.html',
  styleUrls: ['./vet-novo-paciente.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule]
})
export class VetNovoPacienteComponent  implements OnInit {
  constructor(private modalCtrl: ModalController) {}
  ngOnInit() {}

  // Close modal
  CloseModal() {
    const modal = this.modalCtrl.dismiss();
    return modal;
  }
}