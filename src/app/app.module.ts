import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutesModule } from './app.routes.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutesModule, HttpClientModule, SharedModule],
  providers: [],
  exports: [SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
