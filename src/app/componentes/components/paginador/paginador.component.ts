import { Component, OnInit } from '@angular/core';
import { PokemonList, Result } from 'src/app/shared/interfaces/pokemon';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.scss'],
})
export class PaginadorComponent implements OnInit {
  public result: Result = {
    count: 0,
    next: '',
    previous: '',
    results: [],
  };
  public page: number = 1;
  public grupo: number = 3;
  public pokemons: Array<PokemonList> = [];
  public loading: boolean = false;
  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.loading = true;
    this.service.getPokemons().subscribe((data: Result) => {
      this.result = data;
      this.puch(this.result);
      this.service.getPokemonsUrl(data.next).subscribe((data: Result) => {
        this.puch(data);
        this.service.getPokemonsUrl(data.next).subscribe((data: Result) => {
          this.puch(data);
          this.service.getPokemonsUrl(data.next).subscribe((data: Result) => {
            this.puch(data);
            this.service.getPokemonsUrl(data.next).subscribe((data: Result) => {
              this.puch(data);
            });
          });
        });
      });
      this.loading = false;
    });
  }

  puch(r: Result): void {
    for (let p of r.results) {
      this.service.getImg(p.url).subscribe((data: any) => {
        this.pokemons.push({
          name: p.name,
          img: data.sprites.other['official-artwork'].front_default,
          order: data.order,
        });
      });
    }
    this.pokemons = this.pokemons.sort((a, b) => a.order - b.order);
  }
}
