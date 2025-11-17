import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Alert } from 'src/app/services/alert';
import { Supabase } from 'src/app/services/supabase/supabase';

@Component({
  selector: 'app-medicamento-detalhes',
  templateUrl: './medicamento-detalhes.component.html',
  styleUrls: ['./medicamento-detalhes.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
  providers: [Supabase]
})
export class MedicamentoDetalhesComponent  implements OnInit {
  constructor(private supabase: Supabase, private toast: Alert) {}
  ngOnInit() {}

  // Get: Medicamentos
  @Input() farmacocinetica: string = "";
  @Input() farmacodinamica: string = "";
}