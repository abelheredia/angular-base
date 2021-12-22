import { Component, OnInit } from '@angular/core';
import { PokemonList, Result } from 'src/app/shared/interfaces/Pokemons';
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

  public page: number = 1;
  public pokemons: Array<PokemonList> = [];

  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    this.service.getPokemons().subscribe((data: Result) => {
      this.result = data;
      for (let p of this.result.results) {
        this.service.getImg(p.url).subscribe((data: any) => {
          this.pokemons.push({
            name: p.name,
            img: data.sprites.other['official-artwork'].front_default,
          });
        });
      }
    });
  }
}
