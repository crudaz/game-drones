import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartGameComponent } from './start-game/start-game.component'
import { RoundComponent } from './round/round.component'
import { WinnerComponent } from './winner/winner.component';

const routes: Routes = [
  { path: '', component: StartGameComponent },
  { path: 'round', component: RoundComponent },
  { path: 'winner', component: WinnerComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
