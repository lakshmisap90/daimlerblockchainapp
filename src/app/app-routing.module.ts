import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { PersonaScreenComponent } from './persona-screen/persona-screen.component';
import { OrderResponseComponent } from './order-response/order-response.component';
import { OrderVehicleListComponent } from './order-vehicle-list/order-vehicle-list.component';
import { OrderVehicleDetailsComponent } from './order-vehicle-details/order-vehicle-details.component';
import { DealerOrderDetailsComponent } from './dealer-order-details/dealer-order-details.component';
import { DealerDashboardComponent } from './dealer-dashboard/dealer-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/persona', pathMatch: 'full' },
  { path: 'persona', component: PersonaScreenComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'login', component: HeroesComponent },
  { path: 'dealer/orders', component: DealerDashboardComponent },

  { path: 'order/:id/details', component: DealerOrderDetailsComponent },
  { path: 'order/:id/response', component: OrderResponseComponent },
  { path: 'order/:id/vehiclelist', component: OrderVehicleListComponent },
  { path: 'order/vehicle/:id', component: OrderVehicleDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
