import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';
import { PersonaScreenComponent } from './persona-screen/persona-screen.component';
import { OrderVehicleListComponent } from './order-vehicle-list/order-vehicle-list.component';
import { OrderVehicleDetailsComponent } from './order-vehicle-details/order-vehicle-details.component';
import { OrderResponseComponent } from './order-response/order-response.component';
import { DealerOrderDetailsComponent } from './dealer-order-details/dealer-order-details.component';
import { DealerDashboardComponent } from './dealer-dashboard/dealer-dashboard.component';
import { Data } from "./provider/order-data.provider";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    PersonaScreenComponent,
    OrderVehicleListComponent,
    OrderVehicleDetailsComponent,
    OrderResponseComponent,
    DealerOrderDetailsComponent,
    DealerDashboardComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [Data]
})
export class AppModule {
}
