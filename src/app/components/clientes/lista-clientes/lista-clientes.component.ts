import { Component, OnInit } from '@angular/core';

// service
import { ClienteService }  from '../../../services/cliente.service';
import { ToastrService } from 'ngx-toastr';

// class
import { Cliente } from '../../../models/cliente';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  clienteList: Cliente[];

  constructor(private clienteService: ClienteService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.clienteService.getCliente()
    .snapshotChanges()
    .subscribe(item => {
      this.clienteList = [];
      item.forEach(element => {
         let y = element.payload.toJSON();
         y["$key"] = element.key;
         this.clienteList.push(y as Cliente);
      });
    });
  }

  onEdit(cliente: Cliente){
    this.clienteService.selectedCliente = Object.assign({},cliente);
  }

  onDelete($key: string){
    if(confirm('Desea eliminar el Cliente?')){
    this.clienteService.deleteCliente($key);
    this.toastr.success('Operacion Realizada', 'Cliente Eliminado');
  }
  }

}
