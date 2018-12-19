import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlayerModel, GameModel } from '../model';
import { GameService } from '../service/game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent implements OnInit {
  model = new PlayerModel('', 0);  
  submitted = false;

  game: GameModel;
  subscription: Subscription;

  constructor(
    private router: Router,
    private gameService: GameService
  ) { }


  ngOnInit() {
  }

  onSubmit() { 
    this.submitted = true; 
    this.newGameData(this.model);
    this.router.navigate(['/round']);
  }

  newGameData(model) {
    this.game = new GameModel(
      new PlayerModel(this.model['player1'], 0),
      new PlayerModel(this.model['player2'], 0),
      1,
      ''
    );
    this.gameService.setGameData(this.game);
  }

}
