import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Asegurado,
  PokemonList,
  Result,
} from 'src/app/shared/interfaces/Pokemons';
import { PokemonService } from '../../services/pokemon.service';
import * as XLSX from 'xlsx';
import SwiperCore, { Navigation, Pagination } from 'swiper';
SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit {
  public file: File;
  public arrayBuffer: any;
  public asegurados: Array<Asegurado> = [];

  public result: Result = {
    count: 0,
    next: '',
    previous: '',
    results: [],
  };
  public page: number = 1;
  public grupo: number = 4;
  public pokemons: Array<PokemonList> = [];
  public tramasFG: FormGroup = new FormGroup({});
  public url: string = '';

  constructor(private service: PokemonService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.tramasFG = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });

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

  enviarTramas(): void {
    let email =
      this.tramasFG.controls.email.value == ''
        ? 'download'
        : this.tramasFG.controls.email.value;
    this.service.enviarTramas(email).subscribe((data: any) => {
      if (email == 'download') {
        this.url = data.tramas;
      }
    });
  }

  addfile(event: any) {
    this.file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(this.file);
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i)
        arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join('');
      var workbook = XLSX.read(bstr, { type: 'binary' });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      this.asegurados = XLSX.utils.sheet_to_json(worksheet, { raw: true });
    };
  }

  str(json: any): string {
    return JSON.stringify(json);
  }
}
