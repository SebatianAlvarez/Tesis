import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clienteList: AngularFireList<any>;
  selectedCliente: Cliente = new Cliente();

  constructor(private firebase: AngularFireDatabase) { }

  getCliente(){
    return this.clienteList = this.firebase.list('clientes');
  }

  insertCliente(cliente: Cliente){
    this.clienteList.push({
      nombre: cliente.nombreCliente,
      apodo: cliente.apodoCliente,
      edad: cliente.edadCliente,
      correo: cliente.correoCliente,
      contra: cliente.contraCliente
    });
  }

  updateCliente(cliente: Cliente){
    this.clienteList.update(cliente.$key,{
      nombre: cliente.nombreCliente,
      apodo: cliente.apodoCliente,
      edad: cliente.edadCliente,
      correo: cliente.correoCliente,
      contra: cliente.contraCliente
    });
  }

  deleteCliente($key: string){
    this.clienteList.remove($key);
  }
}
