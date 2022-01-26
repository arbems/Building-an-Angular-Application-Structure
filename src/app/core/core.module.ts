import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MainMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
}

/*
  Para lograr este comportamiento, se debe implementar una protección dentro del constructor. 
  Al usar el siguiente código, la aplicación falla si core.module se carga más de una vez.
*/
