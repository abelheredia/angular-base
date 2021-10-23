import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutesModule } from './auth.routes.module';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [LoginComponent, NotFoundComponent],
  imports: [CommonModule, AuthRoutesModule],
})
export class AuthModule {}
