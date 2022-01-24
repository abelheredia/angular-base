import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { StepperComponent } from './components/stepper/stepper.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonsComponent,
  },
  {
    path: 'stepper',
    component: StepperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutesModule {}
