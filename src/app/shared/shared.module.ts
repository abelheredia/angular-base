import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';

const elements = [LoadingComponent];

@NgModule({
  declarations: [elements],
  imports: [CommonModule],
  exports: [elements],
})
export class SharedModule {}
