import { NgModule, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InventoryComponent } from '../../pages/inventory/inventory.component';
import { PointOfSaleComponent } from '../../pages/point-of-sale/point-of-sale.component';
import { StatisticComponent } from '../../pages/statistic/statistic.component';
import { MasterComponent } from 'src/app/pages/master/master.component';
import { InsertuserComponent } from 'src/app/pages/insertuser/insertuser.component';
import { ConfigMasterComponent } from 'src/app/pages/config-master/config-master.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    InventoryComponent,
    PointOfSaleComponent,
    StatisticComponent,
    MasterComponent,
    InsertuserComponent,
    ConfigMasterComponent
  ]
})

export class AdminLayoutModule{}
