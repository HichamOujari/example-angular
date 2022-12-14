import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PanierComponentComponent } from './panier-component/panier-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    PanierComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
