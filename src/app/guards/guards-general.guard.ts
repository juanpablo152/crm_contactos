import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardsGeneralGuard implements CanActivate {
  constructor ( private auth: AuthService, private router: Router) {  }

  canActivate() {
    if (this.auth.getSession()) {
      // está logueado el cliente
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
