import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError, of} from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
declare var $: any;

export interface User {
  idUser: Number;
  correo: String;
  idTipoUsuario: Number;
  estado: Boolean;
  nombres: String;
  apellidos: String;
  identificacion: string;
  tipousuario: {
    idTipoUsuario: Number;
    tipoUsuario: String;
  };
}

@Injectable()
export class AuthService {

  httpOptions1 = {
    headers: new HttpHeaders({
      'x-auth-token': localStorage.getItem('userK'),
    }),
    responseType: 'json' as any
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    responseType: 'json' as any
  }

  private uri = 'https://finalprojectapi.herokuapp.com';
    constructor ( private http: HttpClient ) {
      console.log('Auth state: active');
    }
    // obtain current user
    getUser(id): Observable<User> {
      console.log('data from users...');
      return this.http.get<User>(this.uri + '/api/user/' + id , this.httpOptions1)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
    }
    // Authentication function
    authentication(correo: string, contrasena: string): Observable<any> {
      return this.http.post<any>(this.uri + '/api/auth', {correo, contrasena}, this.httpOptions)
        .pipe(map(user => user));
      }

    // Create Token and session
    setSession(user: string): void {
      const userLogin = JSON.stringify(user);
      localStorage.setItem('userL', userLogin);
    }

    setSessionToken(key: string): void {
      localStorage.setItem('userK', key);
    }

    getSession() {
      const userLogin = localStorage.getItem('userL');
      if (!isNullOrUndefined(userLogin)) {
        const user = JSON.parse(userLogin);
        return user;
      } else {
        return null;
      }
    }

    getSessionToken() {
      return localStorage.getItem('userK');
    }

    exitSession() {
      localStorage.removeItem('userL');
      localStorage.removeItem('userK');
    }

     // Error handling
    handleError(error) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
   }

   showNotification(from: string, align: string, textMessage: string, typeMessage: number, typeIcon: number) {
    const type = ['', 'info', 'success', 'warning', 'danger'];
    const iconNotification = ['notifications', 'warning', 'error', ''];

    // const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
        icon: iconNotification[typeIcon],
        message: textMessage
    },
    {
      type: type[typeMessage],
      delay: 2000,
      timer: 1000,
      placement: {
          from: from,
          align: align
    },
      template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
        '<i class="material-icons" data-notify="icon"> ' + iconNotification[typeIcon] + ' </i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
      '</div>'
    });
  }
}

