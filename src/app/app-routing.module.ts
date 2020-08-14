import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableTennisAssociationComponent } from './table-tennis-association/table-tennis-association.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'association', component: TableTennisAssociationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
