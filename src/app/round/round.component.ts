import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.scss']
})
export class RoundComponent implements OnInit {
  title: string;
  PlayerName: string;
  round: number;
  
  constructor() { }

  ngOnInit() {
    
    this.title = 'Round 1';
    this.PlayerName = "Player1 Name";
    this.round = 3;

  }

  changeRound(title: string, playerName: string, roundNumber: number) {
    this.title = 'Round ' + roundNumber;
    this.PlayerName = playerName;
    this.round = roundNumber;
  }

}
