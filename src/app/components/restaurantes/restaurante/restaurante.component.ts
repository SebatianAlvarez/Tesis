import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// service
import { RestauranteService } from '../../../services/restaurante.service';
import { ToastrService } from 'ngx-toastr';

// class
import { Restaurante } from 'src/app/models/restaurante';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {

  constructor(private restauranteService: RestauranteService,
              private toastr: ToastrService) { 

  }

  ngOnInit() {
    this.restauranteService.getRestaurant();
    this.resetForm();
  }

  onSubmit(restaurantForm: NgForm){
    if(restaurantForm.value.$key == null){
      this.restauranteService.insterRestaurant(restaurantForm.value);
      this.toastr.success('Operacion Realizada', 'Restaurante Agregado');
    }
    else{ 
      this.restauranteService.updateRestaurant(restaurantForm.value);
      this.toastr.success('Operacion Realizada', 'Restaurante Actualizado');
    }

    this.resetForm(restaurantForm);
    
  }

  resetForm(restaurantForm?: NgForm){
    if(restaurantForm != null)
      restaurantForm.reset();
      this.restauranteService.selectedRestaurant = new Restaurante();
  }

}
