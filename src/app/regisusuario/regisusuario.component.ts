import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { RegisusuarioService } from '../services/regisusuario.service';
import { Regisusuario } from '../models/Regisusuario';
import { Validators, NgForm } from '@angular/forms';

/* Componente regisusuario, en este ts se realizan los métodos correspondientes para
el crud de registro de usuarios así mismo como el llamado al modelo como serán guardado
los datos.
*/
@Component({
  selector: 'app-regisusuario',
  templateUrl: './regisusuario.component.html',
  styleUrls: ['./regisusuario.component.scss']
})
export class RegisusuarioComponent implements OnInit {
  
    regisusuario: Regisusuario = {
    iduser: 0,
    nombres: '',
    apellidos: '',
    identificacion: 0,
    correo: '',
    contrasena: '',
    createdAt: new Date,
    updateAt: new Date,
    idTipoUsuario: 2,
    estado: 1,
    zona: 0
  }
    //Declaración de algunas variables necesarias para la ejecución de los metodos
  //usado para paginar la tabla
  pageActual: number = 1;
    //Necesario para poder agregar un nuevo objeto

  usuario: any = [];
    //no es tan indispensable pero se uso para no tener inconveniencias con el boton guardar

  edit: boolean = false;
    //notifica el error si el usuario no relleno el formulario de manera correcta

  public isError = false;
    //Se incicializan las variables para usarlas en los métodos.

  constructor(private regisusuarioService: RegisusuarioService, private router: Router,private activeRoute: ActivatedRoute) { }
    //Se llama el método para listar los objetos y se realiza una validación para el boton guardar

  ngOnInit() {
    this.getUsuarios();
  }
    //Obtiene todos los objetos desde la bd

  getUsuarios() {
    this.regisusuarioService.getUsuarios().subscribe(
      res => {
        this.usuario = res;
        console.log(res);
      },
      err => console.log(err)
    );
   }
     //notifica un error si el formulario no se lleno de manera correcta

   onIsError(): void {
    this.isError = true;
    setTimeout (() => {
      this.isError = false;
    }, 3000)
  }
   //agrega un nuevo objeto

   saveNuevoUsuario(event) {
    event.preventDefault();
    const target = event.target;
    const id = target.querySelector('#iduser').value;
    const nombre = target.querySelector('#nombres').value;
    const apellido = target.querySelector('#apellidos').value;
    const identificacion = target.querySelector('#identificacion').value;
    const email = target.querySelector('#correo').value;
    const contrasena = target.querySelector('#contrasena').value;
    const contrasena1 = target.querySelector('#contrasena1').value;
    let message: string;
    console.log('paso por validación');
    if (id < 0) {
      message = 'el id no puede ser negativo, verifique...';
      this.regisusuarioService.showNotification('top', 'right', message, 3, 1);
      console.log('verifique los campos');
 } else if (nombre === '' || null) {
  message = 'Falta llenar el campo nombre, verifique...';
  this.regisusuarioService.showNotification('top', 'right', message, 3, 1);
  console.log('verifique los campos');
} else if (apellido === '' || null) {
  message = 'Falta llenar el campo apellido, verifique...';
  this.regisusuarioService.showNotification('top', 'right', message, 3, 1);
  console.log('verifique los campos');
} else if (identificacion < 0) {
  message = 'la indentificación no puede ser negativo, verifique...';
  this.regisusuarioService.showNotification('top', 'right', message, 3, 1);
  console.log('verifique los campos');
} else if (email === '' || null) {
  message = 'Falta llenar el campo email, verifique...';
  this.regisusuarioService.showNotification('top', 'right', message, 3, 1);
  console.log('verifique los campos');
} else if (email === '' || null) {
  message = 'Falta llenar el campo email, verifique...';
  this.regisusuarioService.showNotification('top', 'right', message, 3, 1);
  console.log('verifique los campos');
} else if (contrasena === '' || null) {
  message = 'Falta llenar el campo contrasena, verifique...';
  this.regisusuarioService.showNotification('top', 'right', message, 3, 1);
  console.log('verifique los campos');
}  else if (contrasena1 === '' || null) {
  message = 'Falta llenar el campo verificar contrasena, verifique...';
  this.regisusuarioService.showNotification('top', 'right', message, 3, 1);
  console.log('verifique los campos');
}  else if(contrasena === contrasena1) {
    this.regisusuarioService.saveUsuario(this.regisusuario).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/']);
        console.log('agregado');
      },
    )} else {
      message = 'Las contraseñas no coinciden, verifique...';
      this.regisusuarioService.showNotification('top', 'right', message, 3, 1);
      console.log('verifique los campos');
    }
  }

    //Se actualiza un objeto


  updateUnUsuario() {
    console.log('entro');
    this.regisusuarioService.updateUsuario(this.regisusuario.iduser, this.regisusuario).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/']);
        console.log('entro 2');
      },
      err => console.error(err)
    )
  }
  //Se elimina un objeto

  deleteUnUsuario(id: string) {
    this.regisusuarioService.deleteUsuario(id).subscribe(
      res => {
        console.log(res);
        this.getUsuarios();
        this.router.navigate(['/regisusuario']);
      },
      err => console.error(err)
    )
  }


}
