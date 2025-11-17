import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class Supabase {
  private supabase: SupabaseClient;
  constructor() {
    this.supabase = createClient(environment.supabase_url, environment.supabase_key);
  }

  // LOGIN
  async LogIn(email: string, senha: string) {
    return await this.supabase.auth.signInWithPassword({email: email, password: senha});
  }

  // LOGOUT
  async LogOut() {
    return await this.supabase.auth.signOut();
  }

  // GET: Current user
  async CurrentUser() {
    return await this.supabase.auth.getUser();
  }

  // GET: User profile
  async UserProfile(user_id: string) {
    return await this.supabase.from('tbl_profiles').select('*').eq('user_id', user_id);
  }

  // GET: Vet | Pacientes
  async GetVetPacientes() {
    return await this.supabase.from('tbl_vet-pacientes').select('*');
  }

  // DELETE: Vet | Pacientes
  async DeletVetPacientes(id: number) {
    return await this.supabase.from('tbl_vet-pacientes').delete().eq('id', id);
  }
}