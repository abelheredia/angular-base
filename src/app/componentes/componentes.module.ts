import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesRoutesModule } from './componentes.routes.module';
import { SharedModule } from '../shared/shared.module';
import { SuiperComponent } from './components/suiper/suiper.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { ComponentesComponent } from './componentes.component';
import { PaginadorComponent } from './components/paginador/paginador.component';

@NgModule({
  declarations: [
    SuiperComponent,
    StepperComponent,
    ComponentesComponent,
    PaginadorComponent,
  ],
  imports: [CommonModule, ComponentesRoutesModule, SharedModule],
})
export class ComponentesModule {}
