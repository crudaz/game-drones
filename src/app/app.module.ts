import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartGameComponent } from './start-game/start-game.component';
import { FormComponent } from './shared/form/form.component';
import { RoundComponent } from './round/round.component';

@NgModule({
  declarations: [
    AppComponent,
    StartGameComponent,
    FormComponent,
    RoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
