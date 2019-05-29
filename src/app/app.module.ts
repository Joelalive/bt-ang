import { PartialsModule } from './partials/partials.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PartialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
