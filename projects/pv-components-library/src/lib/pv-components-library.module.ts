import { NgModule } from '@angular/core';
import { PvComponentsLibraryComponent } from './pv-components-library.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    PvComponentsLibraryComponent,
    ButtonComponent,
    CardComponent
  ],
  imports: [
  ],
  exports: [
    PvComponentsLibraryComponent,
    ButtonComponent,
    CardComponent
  ]
})
export class PvComponentsLibraryModule { }
