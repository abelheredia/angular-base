import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonList, Result } from 'src/app/shared/interfaces/pokemon';
import { SharedService } from 'src/app/shared/shared.service';
import SwiperCore, { Navigation, Pagination } from 'swiper';
SwiperCore.use([Navigation, Pagination]);
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-suiper',
  templateUrl: './suiper.component.html',
  styleUrls: ['./suiper.component.scss'],
})
export class SuiperComponent implements OnInit {
  @ViewChild('suiper', { static: false }) swiper: SwiperComponent;
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

  public paginacion(): any {
    return {
      clickable: true,
      renderBullet: (index: any, className: any) =>
        '<span class="' + className + '">' + (index + 1) + '</span>',
    };
  }

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
            order: data.order,
          });
        });
      }
      this.pokemons.sort();
      this.loading = false;
    });
  }

  act(a: string): void {
    switch (a) {
      case 'prev':
        this.swiper.swiperRef.slidePrev(400);
        break;
      case 'next':
        this.swiper.swiperRef.slideNext(400);
        break;
    }
  }
}
