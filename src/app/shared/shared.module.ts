import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { LoadingComponent } from './components/loading/loading.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SwiperModule } from 'swiper/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const elements = [LoadingComponent];

const mat_modules = [
  MatStepperModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
];

const other_modules = [
  ReactiveFormsModule,
  FormsModule,
  NgxPaginationModule,
  SwiperModule,
];

@NgModule({
  declarations: [elements],
  imports: [CommonModule, mat_modules, other_modules],
  exports: [elements, mat_modules, other_modules],
})
export class SharedModule {}
