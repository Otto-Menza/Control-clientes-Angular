import { Routes } from '@angular/router';
import { Tablero } from './componentes/tablero/tablero';
import { Login } from './componentes/login/login';
import { EditarCliente } from './componentes/editar-cliente/editar-cliente';
import { NoEncontrado } from './componentes/no-encontrado/no-encontrado';

export const routes: Routes = [
    {path: '', component: Tablero},
    {path: 'login', component: Login},
    {path: 'cliente/editar/:id', component: EditarCliente},
    {path: '**', component: NoEncontrado}
];
