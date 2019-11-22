import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { InventoryComponent } from '../../pages/inventory/inventory.component';
import { MasterComponent } from 'src/app/pages/master/master.component';
import { InsertuserComponent } from 'src/app/pages/insertuser/insertuser.component';
import { ConfigMasterComponent } from 'src/app/pages/config-master/config-master.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'master',           component:  MasterComponent},
    { path: 'inventory',           component: InventoryComponent },
    { path: 'insertuser',           component: InsertuserComponent },
    { path: 'masterconfig',           component: ConfigMasterComponent }
];
