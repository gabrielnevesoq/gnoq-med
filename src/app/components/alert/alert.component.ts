import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

export type AlertType = 'success' | 'error';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  imports: [IonicModule]
})
export class AlertComponent  implements OnInit {
  constructor() {}
  ngOnInit() {}

  @Input() type: AlertType = 'success';
  @Input() message: string = '';
  @Input() duration: number = 3000; // milissegundos

  visible = false;

  show() {
    this.visible = true;
    if (this.duration > 0) {
      setTimeout(() => this.hide(), this.duration);
    }
  }

  hide() {
    this.visible = false;
  }

  // Cores e ícones
  getIcon() {
    return this.type === 'success' ? 'checkmark-circle' : 'close-circle';
  }

  getColor() {
    return this.type === 'success' ? 'success' : 'danger';
  }
}