import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartGameComponent } from './start-game/start-game.component';
import { FormComponent } from './shared/form/form.component';
import { RoundComponent } from './round/round.component';

import { GameService } from './service/game.service';

@NgModule({
  declarations: [
    AppComponent,
    StartGameComponent,
    FormComponent,
    RoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
