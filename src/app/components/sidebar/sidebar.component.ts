import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Toaster } from 'ngx-toast-notifications';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/login', title: 'Ingresar',  icon: 'account_circle', class: '' },
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Mi Información',  icon: 'person', class: '' },
    { path: '/table-list', title: 'Mis Tareas',  icon: 'content_paste', class: '' },
    { path: '/table-list', title: 'Mis Registros',  icon: 'create', class: '' },
    // { path: '/typography', title: 'Typography',  icon: 'library_books', class: '' },
    // { path: '/icons', title: 'Icons',  icon: 'bubble_chart', class: '' },
    // { path: '/maps', title: 'Maps',  icon: 'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon: 'notifications', class: '' },
    { path: '/contacto', title: 'Contactos',  icon:'person', class: ' ' },
    { path: '/regisusuario', title: 'Registrar usuario',  icon:'person', class: ' ' },
    { path: '/establecimiento', title: 'Establecimiento',  icon:'person', class: ' ' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon: 'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private auth: AuthService,
              private toast: Toaster,
              private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  logout() {
    let message = 'Su sesión a finalizado. Vuelva Pronto...';
    this.auth.exitSession();
    this.auth.showNotification('top', 'right', message, 1, 0);
    // espera de 3.5 milisegundos para inicio de sesión
    setTimeout(() => {
    this.router.navigate(['/login']);
    }, 3500);
}
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
