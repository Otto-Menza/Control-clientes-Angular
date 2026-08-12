import { Component, NgModule } from '@angular/core';
import { Cliente } from '../../modelo/cliente.modelo';
import { ClienteService } from '../../servicios/cliente';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-clientes',
  imports: [CommonModule, RouterModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes {
  clientes: Cliente[] | null = null;

  constructor(private clientesServicio: ClienteService){}

  ngOnInit(){
    this.clientesServicio.getClientes().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

    //codigo normal:
  /* getSaldoTotal(): number {
    let saldoTotal: number = 0;
    if(this.clientes){
      this.clientes.forEach(cliente => {
        if(cliente.saldo !== undefined){
          saldoTotal += cliente.saldo;
        }
      });
    }
    return saldoTotal;
  } */
   getSaldoTotal(): number{
    return this.clientes?.reduce((total, cliente) => total + (cliente.saldo ?? 0), 0) ?? 0;
   }
}
