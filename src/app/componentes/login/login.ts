import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../servicios/login';

@Component({
  selector: 'app-login',
  imports: [ FormsModule ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email: string | null = null;
  password: string | null = null;
  mensaje: string | null = null;

  constructor(
    private router: Router,
    private loginServicio: LoginService
  ){}

  ngOnInit(){
    this.loginServicio.getAuthState().subscribe(usuario => {
      if(usuario){
        this.router.navigate(['/']);
      }
    });
  }

  login() {
    if(this.email && this.password){
      this.loginServicio.login(this.email, this.password)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch(error => {
        this.mensaje = 'Error al hacer login: ' + error;
      });
    } else{
      this.mensaje = 'Por favor, ingresar un email y password válidos';
    }
  }
}
