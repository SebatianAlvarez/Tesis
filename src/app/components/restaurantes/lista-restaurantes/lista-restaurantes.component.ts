import { Component, OnInit } from '@angular/core';

// service
import { RestauranteService } from '../../../services/restaurante.service';

// class
import { Restaurante } from 'src/app/models/restaurante';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-restaurantes',
  templateUrl: './lista-restaurantes.component.html',
  styleUrls: ['./lista-restaurantes.component.css']
})
export class ListaRestaurantesComponent implements OnInit {

  restaurantList: Restaurante[];

  constructor(private restauranteService: RestauranteService,
              private toastr: ToastrService ) { }

  ngOnInit() {
    this.restauranteService.getRestaurant()
    .snapshotChanges()
    .subscribe(item => {
      this.restaurantList = [];
      item.forEach(element => {
         let x = element.payload.toJSON();
         x["$key"] = element.key;
         this.restaurantList.push(x as Restaurante);
      });
    });
  }

  onEdit(restaurante: Restaurante){
    this.restauranteService.selectedRestaurant = Object.assign({},restaurante);
    
  }

  onDelete($key: string){
    if(confirm('Desea eliminar el Restaurante?')){
      this.restauranteService.deleteRestaurant($key);
      this.toastr.success('Operacion Realizada', 'Restaurante Eliminado');
    }
  }

}
