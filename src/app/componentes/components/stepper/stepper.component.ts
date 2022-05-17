import { Component, OnInit } from '@angular/core';
import { PokemonList, Result } from 'src/app/shared/interfaces/pokemon';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  public result: Result = {
    count: 0,
    next: '',
    previous: '',
    results: [],
  };
  public page: number = 1;
  public grupo: number = 5;
  public pokemons: Array<PokemonList> = [];
  public loading: boolean = false;
  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.loading = true;
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
      this.loading = false;
    });
  }
}
