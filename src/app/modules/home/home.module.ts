import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './pages/home-view.component';

import { ExampleComponent } from './components/example-component/example-component';
import { OtherExampleComponent } from './components/other-example-component/other-example-component';


@NgModule({
  declarations: [
    ExampleComponent,
    OtherExampleComponent,
    HomeViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
