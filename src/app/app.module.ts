import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AssociationsComponent } from './landingpage/associations/associations.component';
import { RankingsComponent } from './landingpage/rankings/rankings.component';
import { NavigationNavbarComponent } from './navigation-navbar/navigation-navbar.component';
import { TableTennisAssociationComponent } from './table-tennis-association/table-tennis-association.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    AssociationsComponent,
    RankingsComponent,
    NavigationNavbarComponent,
    TableTennisAssociationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
