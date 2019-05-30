import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../services/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  error = '';
  usuario: User;
  constructor( private auth: AuthService,
                private router: Router
              ) { }

  ngOnInit() { }

  authProccess( event ) {
    event.preventDefault();
    const target = event.target;
    const correo = target.querySelector('#correo').value;
    const contrasena = target.querySelector('#contrasena').value;
    let message: string;

    if (correo === '' || correo === null) {
      message = 'Campo de Usuario vacio, verifique...';
      this.auth.showNotification('top', 'right', message, 3, 1);
      document.getElementById('correo').focus();
      return;
    } else if (contrasena === '' || contrasena === null) {
      message = 'Campo de Contraseña vacio, verifique...';
      this.auth.showNotification('top', 'right', message, 3, 1);
      document.getElementById('contrasena').focus();
      return;
    }

    this.auth.authentication(correo, contrasena)
    .pipe(first())
    .subscribe(
      data => {
        message = 'Bienvenido, Espere por favor !';
        this.auth.showNotification('top', 'right', message, 2, 0);
        this.auth.setSession(data.user);
        this.auth.setSessionToken(data.token);
        const idSession = this.auth.getSession();
        console.log('identificador : ' + idSession.idUser);
        // consulta al api para traer los datos
        this.dataUser(parseInt(idSession.idUser, 0));
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 3500);
      },
      error => {
        this.error = error;
        message = 'Oppsss, Algo va mal... Verifique sus credenciales !';
        this.auth.showNotification('top', 'right', message, 4, 2);
      });
  }

  dataUser(id: number) {
    this.auth.getUser(id)
      .subscribe( user => {
        console.log(user);
        this.usuario = user;
    })
  }
}
