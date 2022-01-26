import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
  Aquí arranca aplicación.
  Cuando está configurado, admite la carga diferida(lazy load) de módulos a través del enrutamiento(routing).
*/