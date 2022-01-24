import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { LoadingComponent } from './components/loading/loading.component';

const elements = [LoadingComponent];

const mat_modules = [MatStepperModule];

@NgModule({
  declarations: [elements],
  imports: [CommonModule, mat_modules],
  exports: [elements, mat_modules],
})
export class SharedModule {}
