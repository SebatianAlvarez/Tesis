import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { ListaRestaurantesComponent } from './components/restaurantes/lista-restaurantes/lista-restaurantes.component';
import { RestauranteComponent } from './components/restaurantes/restaurante/restaurante.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ListaClientesComponent } from './components/clientes/lista-clientes/lista-clientes.component';
import { ClienteComponent } from './components/clientes/cliente/cliente.component';
import { InicioComponent } from './components/inicio/inicio.component';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'Restaurantes', component: RestaurantesComponent},
  {path: 'Restaurante', component: RestauranteComponent},
  {path: 'ListaRestaurantes', component: ListaRestaurantesComponent},
  {path: 'Clientes', component: ClientesComponent},
  {path: 'Cliente', component: ClienteComponent},
  {path: 'ListaClientes', component: ListaClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
