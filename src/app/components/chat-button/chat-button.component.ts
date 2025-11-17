import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-chat-button',
  templateUrl: './chat-button.component.html',
  styleUrls: ['./chat-button.component.scss'],
  imports: [IonicModule, FormsModule, CommonModule]
})
export class ChatButtonComponent  implements OnInit {
  constructor() { }
  ngOnInit() {}
}