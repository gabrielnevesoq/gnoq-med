import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alert } from 'src/app/services/alert';
import { Supabase } from 'src/app/services/supabase/supabase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
  providers: [Supabase]
})
export class LoginPage implements OnInit {
  constructor(private router: Router, private supabase: Supabase, private toast: Alert) { }
  ngOnInit() {}

  // Login
  public email: string = "";
  public senha: string = "";
  async LogIn() {
    // Tratativa: Sem dados inseridos
    if (this.email === "") {this.toast.error('Erro ao logar. Favor inserir um email válido.')}

    // Fazendo login
    const {error} = await this.supabase.LogIn(this.email, this.senha);
    if (error) {
      console.log(error);
    } else {
      this.toast.success('Sucesso. Redirecionando para a página inicial.')
      this.router.navigateByUrl('/home');
    }
  }
}