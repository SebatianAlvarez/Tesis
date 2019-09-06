import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth  } from 'firebase/app';

// services
import { ClienteService } from '../../../services/cliente.service';
import { ToastrService } from 'ngx-toastr'

import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private clienteService: ClienteService,
              private toastr: ToastrService,
              public afAuth: AngularFireAuth) {

   }

  ngOnInit() {
    this.clienteService.getCliente();
    this.resetForm();
  }

  onSubmit(clienteForm: NgForm){
    if(clienteForm.value.$key == null){
      this.clienteService.insertCliente(clienteForm.value);
      this.toastr.success('Operacion Realizada', 'Cliente Agregado');
    }
    else{
      this.clienteService.updateCliente(clienteForm.value);
      this.toastr.success('Operacion Realizada', 'Cliente Actualizado');
    }

  this.resetForm(clienteForm);
  }

  resetForm(clienteForm?: NgForm){
    if(clienteForm != null)
      clienteForm.reset();
      this.clienteService.selectedCliente = new Cliente();
  }

  /* revisar como mierda hacer esto

  onLoginFacebook(){
    const provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider).then(result => {
      $('avatar').attr('src', result.user.photoURL)
      $('.modal').modal('close')
      Materialize.toast('Bienvenido ${result.user.displayName} !!', 4000)
    })
    .catch(error =>{
      console.error(error)
      Materialize.toast('Error al autenticarse con Facebook: ${error}'. 4000)
    }
    )
  }

  onLoginGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(result => {
      $('avatar').attr('src', result.user.photoURL)
      $('.modal').modal('close')
      Materialize.toast('Bienvenido ${result.user.displayName} !!', 4000)
    })
    .catch(error =>{
      console.error(error)
      Materialize.toast('Error al autenticarse con Google: ${error}'. 4000)
    }
    )
  }

  */

  onLoginFacebook(){
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  onLoginGoogle(){
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  onLogout(){
    this.afAuth.auth.signOut();
  }

}


