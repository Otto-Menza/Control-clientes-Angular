import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecero } from "./componentes/cabecero/cabecero";
import { PiePagina } from "./componentes/pie-pagina/pie-pagina";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cabecero, PiePagina],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly titulo ='Control de Clientes';
}
