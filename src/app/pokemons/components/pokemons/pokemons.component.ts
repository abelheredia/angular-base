import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/shared/interfaces/Pokemons';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit {
  public result: Result = {
    count: 0,
    next: '',
    previous: '',
    results: [],
  };

  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    this.service.getPokemons().subscribe((data: Result) => {
      this.result = data;
    });
  }
}
