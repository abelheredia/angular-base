import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { PokemonRoutesModule } from './pokemons.routes.module';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { SharedModule } from '../shared/shared.module';
import { StepperComponent } from './components/stepper/stepper.component';

@NgModule({
  declarations: [PokemonsComponent, StepperComponent],
  imports: [
    CommonModule,
    PokemonRoutesModule,
    NgxPaginationModule,
    SharedModule,
  ],
})
export class PokemonsModule {}
