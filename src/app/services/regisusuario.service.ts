import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Regisusuario } from '../models/Regisusuario';
import { Observable } from 'rxjs';
declare var $: any;

@Injectable({
  providedIn: 'root'
})

// Se hace el llamado a las Api del server para realizar el crud y usarlas en la aplicación

export class RegisusuarioService {

  API_URI = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get(`${this.API_URI}/regisusuario`);
  }
  getUsuario(id: string) {
    return this.http.get(`${this.API_URI}/regisusuario/${id}`);
  }

  deleteUsuario(id: string) {
    return this.http.delete(`${this.API_URI}/regisusuario/${id}`);
  }

  saveUsuario(usuario: Regisusuario) {
    return this.http.post(`${this.API_URI}/regisusuario`, usuario);
  }

  updateUsuario(id: string|number, updatedUsuario: Regisusuario) {
    return this.http.put(`${this.API_URI}/establecimiento/${id}`, updatedUsuario);
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