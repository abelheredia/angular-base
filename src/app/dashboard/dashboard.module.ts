import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutesModule } from './dashboard.routes.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutesModule],
})
export class DashboardModule {}
