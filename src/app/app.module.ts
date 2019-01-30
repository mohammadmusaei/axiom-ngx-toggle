import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AxiomToggleComponent } from './axiom-toggle/axiom-toggle/axiom-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    AxiomToggleComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
