import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PanierComponentComponent } from './panier-component/panier-component.component';


const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'panier', component: PanierComponentComponent },
  { path: '**', component: HomeComponentComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
