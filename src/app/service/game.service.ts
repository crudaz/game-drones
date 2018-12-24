import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { GameModel } from '../model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gameSource = new BehaviorSubject<GameModel>( 
    new GameModel ({name: '', move: '', point: 0}, {name: '', move: '', point: 0}, 0, '')
  );

  constructor() {}

  setGameData(data: GameModel) {
    this.gameSource.next(data);
  }

  getGameData(): Observable<any>  {
    return this.gameSource.asObservable();
  }

}
