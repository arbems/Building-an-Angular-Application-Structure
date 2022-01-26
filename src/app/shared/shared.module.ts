import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsCardComponent } from './components/details-card/details-card.component';
import { DetailsTableComponent } from './components/details-table/details-table.component';
import { ElementSameSizeDirective } from './directives/element-same-size/element-same-size.directive';
import { TextFilterPipe } from './pipes/text-filter/text-filter.pipe';
import { ClickOutsideDirective } from './directives/click-outside/click-outside.directive';



@NgModule({
  declarations: [
    DetailsCardComponent,
    DetailsTableComponent,
    ClickOutsideDirective,
    ElementSameSizeDirective,
    TextFilterPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
