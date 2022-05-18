import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) {}

  getPokemons(): any {
    return this.http
      .get('https://pokeapi.co/api/v2/pokemon')
      .pipe(map((data) => data));
  }

  getImg(url: string): any {
    return this.http.get(url).pipe(map((data) => data));
  }
}
