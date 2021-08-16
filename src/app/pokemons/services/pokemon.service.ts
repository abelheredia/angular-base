import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Result } from 'src/app/shared/interfaces/Pokemons';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemons(): any {
    return this.http
      .get('https://pokeapi.co/api/v2/pokemon')
      .pipe(map((data) => data));
  }
}
