import { Component, OnInit } from '@angular/core';
import { componentes, Componente } from '../shared/interfaces/utils';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public componentes: Array<Componente> = componentes;
  constructor() {}

  ngOnInit(): void {}
}
