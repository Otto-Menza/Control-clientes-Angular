import { Component, ElementRef, NgModule, viewChild } from '@angular/core';
import { Cliente } from '../../modelo/cliente.modelo';
import { ClienteService } from '../../servicios/cliente';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule, NgForm } from "@angular/forms";
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-clientes',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes {
  clientes: Cliente[] | null = null;
  cliente: Cliente = {
    nombre:'',
    apellido:'',
    email:'',
    saldo: undefined
  };
  @ViewChild('botonCerrar') botonCerrar!: ElementRef;

  constructor(private clientesServicio: ClienteService){}

  ngOnInit(){
    this.clientesServicio.getClientes().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

   getSaldoTotal(): number{
    return this.clientes?.reduce((total, cliente) => total + (cliente.saldo ?? 0), 0) ?? 0;
   }

  agregar(clienteForm: NgForm){
    const {value, valid} = clienteForm;
    if(valid){
      //agregar el cliente en la base:
      this.clientesServicio.agregarCliente(value);
      //limpiar los campos:
      clienteForm.resetForm();
      this.cerrarModal();
    }
  }
  private cerrarModal(){
    this.botonCerrar.nativeElement.click();
  }
}
