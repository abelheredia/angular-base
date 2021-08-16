import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutesModule } from './auth.routes.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AuthRoutesModule],
})
export class AuthModule {}
