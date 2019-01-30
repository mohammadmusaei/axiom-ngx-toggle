import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AxiomToggleDirective } from './axiom-toggle/axiom-toggle.directive';
import { AxiomToggleComponent } from './axiom-toggle/axiom-toggle/axiom-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    AxiomToggleDirective,
    AxiomToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
