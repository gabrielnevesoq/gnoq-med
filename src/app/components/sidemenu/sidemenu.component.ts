import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Alert } from 'src/app/services/alert';
import { Supabase } from 'src/app/services/supabase/supabase';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
  providers: [Supabase]
})
export class SidemenuComponent  implements OnInit {
  constructor(private supabase: Supabase, private toast: Alert) { }
  ngOnInit() {
    this.loadUserData();
  }

  // GET: Current user
  public profile: any[] = [];
  async loadUserData() {
    // 1. Primeiro pega o usuário atual
    const { data: authData, error: authError } = await this.supabase.CurrentUser();

    if (authError || !authData?.user) {
      this.toast.error('Erro ao recuperar dados do usuário.');
      return;
    }

    const userId = authData.user.id;
    console.log('User ID:', userId);

    // 2. Agora sim, com o ID garantido, busca o perfil
    const { data: profileData, error: profileError } = await this.supabase.UserProfile(userId);

    if (profileError) {
      console.error(profileError);
      this.toast.error('Erro ao recuperar perfil do usuário.');
    } else {
      this.profile = profileData;
      this.toast.success('Bem vindo(a)! ')
      console.log('Perfil carregado:', profileData);
    }
  }
}