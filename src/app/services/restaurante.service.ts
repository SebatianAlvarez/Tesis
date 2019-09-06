import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

import {Restaurante} from '../models/restaurante';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  ResturantList: AngularFireList<any>;
  selectedRestaurant: Restaurante = new Restaurante();


  constructor(private firebase: AngularFireDatabase) { }

    getRestaurant()
    {
      return this.ResturantList = this.firebase.list('restaurantes');
    }

    insterRestaurant(restaurante: Restaurante)
    {
      this.ResturantList.push({
        nombre: restaurante.nombreRestaurante,
        foto: restaurante.fotoRestaurante,
        horario: restaurante.horario,
        direccion: restaurante.direccion,
        capacidad: restaurante.capacidad,
        tipo: restaurante.tipoLocal
      });
    }

    updateRestaurant(restaurante: Restaurante)
    {
      this.ResturantList.update(restaurante.$key, {
        nombre: restaurante.nombreRestaurante,
        foto: restaurante.fotoRestaurante,
        horario: restaurante.horario,
        direccion: restaurante.direccion,
        capacidad: restaurante.capacidad,
        tipo: restaurante.tipoLocal
      });
    }

    deleteRestaurant($key: string)
    {
      this.ResturantList.remove($key);
    }
}

