import { Component, NgModule } from '@angular/core';
import { Cliente } from '../../modelo/cliente.modelo';
import { ClienteService } from '../../servicios/cliente';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule, NgForm } from "@angular/forms";

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
      //limpiar los campos:
      clienteForm.resetForm();
    }
  }
}
