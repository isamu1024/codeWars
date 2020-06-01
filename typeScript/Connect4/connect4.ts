/**
 *
 *  The game consists of a grid (7 columns and 6 rows) and two players that take turns to drop their discs.
 *  The pieces fall straight down, occupying the next available space within the column.
 *  The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.
 *
 *  Your task is to create a Class called Connect4 that has a method called play which takes one argument for the column where the player is going to place their disc.
 *
 *  Rules
 *
 *  If a player successfully has 4 discs horizontally, vertically or diagonally then you should return "Player n wins!” where n is the current player either 1 or 2.
 *  If a player attempts to place a disc in a column that is full then you should return ”Column full!” and the next move must be taken by the same player.
 *  If the game has been won by a player, any following moves should return ”Game has finished!”.
 *  Any other move should return ”Player n has a turn” where n is the current player either 1 or 2.
 *  Player 1 starts the game every time and alternates with player 2.
 *  The columns are numbered 0-6 left to right.
 *
 */

export class Connect4 {
  private grid: Player[][] = new Array();
  private players: Array<Player> = [];

  constructor() {
    this.players.push(new Player(1));
    this.players.push(new Player(2));
  }

  private generate() {}

  play(col: number): string {
    return ` to do`;
  }
}

export class Player {
  public id: number;

  constructor(id: number) {
    this.id = id;
  }
}

let game = new Connect4();

d;
