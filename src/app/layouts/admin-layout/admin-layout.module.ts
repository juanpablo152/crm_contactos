import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ContactoComponent } from '../../contacto/contacto.component';
import { EstablecimientoComponent } from '../../establecimiento/establecimiento.component';
import { RegisusuarioComponent  } from '../../regisusuario/regisusuario.component';
import { ContactoService } from '../../services/contacto.service';
import { EstablecimientoService } from '../../services/establecimiento.service';
import { RegisusuarioService  } from '../../services/regisusuario.service';
import {NgxPaginationModule} from 'ngx-pagination';

// personalizadas
import { LoginComponent } from '../../login/login.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    NgxPaginationModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    LoginComponent,
    ContactoComponent,
    EstablecimientoComponent,
    RegisusuarioComponent,
  ],
  providers: [
    ContactoService,
    EstablecimientoService,
    RegisusuarioService
  ]
})

export class AdminLayoutModule {}
