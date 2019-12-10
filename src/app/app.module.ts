import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//Geolocation
import { Geolocation } from '@ionic-native/geolocation/ngx';

// firebase

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

// components

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { ListaRestaurantesComponent } from './components/restaurantes/lista-restaurantes/lista-restaurantes.component';
import { RestauranteComponent } from './components/restaurantes/restaurante/restaurante.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ListaClientesComponent } from './components/clientes/lista-clientes/lista-clientes.component';
import { ClienteComponent } from './components/clientes/cliente/cliente.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MapaComponent } from './components/mapa/mapa.component'

// services

import { ClienteService} from './services/cliente.service';
import { RestauranteService } from './services/restaurante.service';
import { AngularFireAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantesComponent,
    ListaRestaurantesComponent,
    RestauranteComponent,
    ClientesComponent,
    ListaClientesComponent,
    ClienteComponent,
    InicioComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ ClienteService, RestauranteService, AngularFireAuth, Geolocation],
  bootstrap: [AppComponent]
})
export class AppModule { }
