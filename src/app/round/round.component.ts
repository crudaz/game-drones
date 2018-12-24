import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/game.service';
import { Subscription } from 'rxjs';
import { GameModel } from '../model';
import { Router } from '@angular/router';

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

  newData: any;
  historyGame = [];
  moves = ['Rock', 'Scissors', 'Paper'];
  playerWinner: string;
  
  constructor(private gameService: GameService, private router: Router) {}
   
  ngOnInit() {
    this.subscription = this.gameService.getGameData()
      .subscribe((game) => {
        this.game = game;
        this.setTitle(game.round);
    });    
    this.changePlayer(1);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setTitle(round: number) {
    this.title = 'Round ' + round;
    this.round = round;
  }

  getMove(event) {
    this.newData = event;
    if(event.name === this.game.player1.name) {
      this.game.player1.move = event.move;
      this.game.player1.point = event.point;
      this.changePlayer(2);
    }
    else {
      this.game.player2.move = event.move;
      this.game.player2.point = event.point;
      this.changePlayer(1);
    }

    if(this.game.player1.move && this.game.player2.move) {
      this.addPoint(this.game.player1.move, this.game.player2.move);
    }
  }

  changePlayer(playerNumber: number) {
    if(playerNumber === 1) {
      this.playerName = this.game.player1.name;
    }
    else {
      this.playerName = this.game.player2.name;
    }
  }

  addPoint(movePlayer1, movePlayer2) {
    let newRound;

    switch (movePlayer1) {
      case 'Rock':
        if(movePlayer2 === 'Paper') {
          this.game.player2.point +=1;
          this.saveGameHistory(this.game.round, this.game.player2.name);
        }
        if(movePlayer2 === 'Scissors') {
          this.game.player1.point +=1;
          this.saveGameHistory(this.game.round, this.game.player1.name);
        }
        break;

      case 'Paper':
        if(movePlayer2 === 'Rock') {
          this.game.player1.point +=1;
          this.saveGameHistory(this.game.round, this.game.player1.name);
        }
        if(movePlayer2 === 'Scissors') {
          this.game.player2.point +=1;
          this.saveGameHistory(this.game.round, this.game.player2.name);
        }
        break;

      case 'Scissors':
        if(movePlayer2 === 'Rock') {
          this.game.player2.point +=1;
          this.saveGameHistory(this.game.round, this.game.player2.name);
        }
        if(movePlayer2 === 'Paper') {
          this.game.player1.point +=1;
          this.saveGameHistory(this.game.round, this.game.player1.name);
        }
        break;
    
      default:
        break;
    }

    if(this.game.player1.point > 0 || this.game.player2.point > 0) {
      newRound = this.round + 1;
      (newRound > 3) ? this.showWinner() : this.changeRound(newRound);  
    }
    if(this.game.player1.point > 1 || this.game.player2.point > 1) {
      newRound = this.round + 2;
      (newRound > 3) ? this.showWinner() : this.changeRound(newRound);
    }
    this.setTitle(newRound);
  }

  changeRound(newRound) {
    this.round = newRound;
    this.game.round = newRound;
    this.game.player1.move = '';
    this.game.player2.move = '';
  }

  saveGameHistory(round, player) {
    let newWinner = { round: round, player: player };
    this.historyGame.push(newWinner);
  }

  showWinner() {
    let first = this.historyGame[0].player;
    let second = this.historyGame[1].player;
    let third = this.historyGame[2].player;

    if(first === second || first === third) {
      this.playerWinner = first;
    }
    else {
      this.playerWinner = second;
    }
  }
  
}
