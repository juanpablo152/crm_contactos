import { Routes } from '@angular/router';

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
import { RegisusuarioComponent } from '../../regisusuario/regisusuario.component';
// personalizados
import { LoginComponent } from '../../login/login.component';

// protección a rutas
import { GuardsGeneralGuard } from '../../guards/guards-general.guard';

export const AdminLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent            },
    { path: 'dashboard',      component: DashboardComponent,        canActivate: [GuardsGeneralGuard] },
    { path: 'user-profile',   component: UserProfileComponent,      canActivate: [GuardsGeneralGuard] },
    { path: 'table-list',     component: TableListComponent,        canActivate: [GuardsGeneralGuard] },
    { path: 'typography',     component: TypographyComponent,       canActivate: [GuardsGeneralGuard] },
    { path: 'icons',          component: IconsComponent,            canActivate: [GuardsGeneralGuard] },
    { path: 'maps',           component: MapsComponent,             canActivate: [GuardsGeneralGuard] },
    { path: 'notifications',  component: NotificationsComponent,    canActivate: [GuardsGeneralGuard] },
    { path: 'upgrade',        component: UpgradeComponent,          canActivate: [GuardsGeneralGuard] },
    { path: 'contacto',        component: ContactoComponent },
    { path: 'regisusuario',        component: RegisusuarioComponent },
    { path: 'establecimiento',  component: EstablecimientoComponent },
];
