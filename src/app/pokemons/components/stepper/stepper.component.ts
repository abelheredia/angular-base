import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  @ViewChild('stepper', { static: false }) stepper: MatStepper;
  public c1: string = 'activo';
  public c2: string = '';
  public c3: string = '';

  constructor() {}

  ngOnInit(): void {}

  click(i: number): void {
    this.stepper.selectedIndex = i;
    switch (i) {
      case 1:
        this.c2 = 'activo';
        break;
      case 2:
        this.c2 = 'activo';
        this.c3 = 'activo';
        break;
    }
  }

  next(): void {
    this.stepper.next();
  }
}
