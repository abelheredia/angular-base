import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctoresComponent } from './components/doctores/doctores.component';
import { DoctoresRoutesModule } from './doctores.routes.module';
import { DashboardModule } from '../dashboard.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SocketIoModule } from 'ngx-socket-io';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [DoctoresComponent],
  imports: [
    CommonModule,
    DoctoresRoutesModule,
    DashboardModule,
    SharedModule,
    FormsModule,
    SocketIoModule,
  ],
  providers: [CookieService],
})
export class DoctoresModule {}
