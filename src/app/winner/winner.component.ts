import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../service/game.service';
import { GameModel, PlayerModel } from '../model';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.scss']
})
export class WinnerComponent implements OnInit {

  @Input() winner: string;

  constructor(private router: Router, 
              private gameService: GameService) { }

  ngOnInit() {
  }

  resetGame() {
    let game = new GameModel(
      new PlayerModel('', '', 0),
      new PlayerModel('', '', 0),
      1,
      ''
    );
    this.gameService.setGameData(game);
    this.router.navigate(['/']);
  }

}
