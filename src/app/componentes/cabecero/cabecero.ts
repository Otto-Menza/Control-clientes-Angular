import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../servicios/login';

@Component({
  selector: 'app-cabecero',
  imports: [RouterModule],
  templateUrl: './cabecero.html',
  styleUrl: './cabecero.css',
})
export class Cabecero {

  isLoggedIn: boolean = false;
  loggedInUser: string | null = null; // almacena el email.

  constructor(
    private loginServicio: LoginService,
    private router: Router
  ){}

  ngOnInit(){
    this.loginServicio.getAuthState().subscribe(usuario => {
      if(usuario){
        this.isLoggedIn = true;
        this.loggedInUser = usuario.email;
      } else{
        this.isLoggedIn = false;
      }
    });
  }

  logout(){
    this.loginServicio.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
