import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuiperComponent } from './components/suiper/suiper.component';
import { ComponentesComponent } from './componentes.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { PaginadorComponent } from './components/paginador/paginador.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentesComponent,
    children: [
      {
        path: 'swiper',
        component: SuiperComponent,
      },
      {
        path: 'stepper',
        component: StepperComponent,
      },
      {
        path: 'paginador',
        component: PaginadorComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentesRoutesModule {}
