import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/game.service';
import { Subscription } from 'rxjs';
import { GameModel } from '../model';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.scss']
})
export class RoundComponent implements OnInit {
  game: GameModel;
  subscription: Subscription;

  title: string;
  playerName: string;
  round: number;
  
  constructor(private gameService: GameService) {}
   
  ngOnInit() {

    this.subscription = this.gameService.getGameData().subscribe((game) => {
      this.game = game;

      this.title = 'Round ' + game.round;
      this.playerName = game.player1.name;
      this.round = game.round;

      console.log('game: ', game);
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // changeRound(title: string, playerName: string, roundNumber: number) {
  //   this.title = 'Round ' + roundNumber;
  //   this.PlayerName = playerName;
  //   this.round = roundNumber;
  // }

}
