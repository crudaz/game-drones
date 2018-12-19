import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { GameModel } from '../model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gameSource = new BehaviorSubject<GameModel>( 
    new GameModel ({name: '', point: 0}, {name: '', point: 0}, 1, '')
  );

  constructor() {}

  setGameData(data: GameModel) {
    this.gameSource.next(data);
  }

  getGameData(): Observable<any>  {
    return this.gameSource.asObservable();
  }

}
