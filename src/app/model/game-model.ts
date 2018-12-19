import { PlayerModel } from "./";

export class GameModel {
    constructor(
        public player1: PlayerModel,
        public player2: PlayerModel,
        public round: number,
        public winner: string,
    ){}
}