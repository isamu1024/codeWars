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
  public grid: Player[][] = new Array();
  private players: Player[] = [];
  private turn: number;

  constructor() {
    this.generate(7);
    this.players.push(new Player(1));
    this.players.push(new Player(2));
    this.turn = 1;
    this.gameLogic();
  }

  private gameLogic() {}

  private generate(n: number) {
    for (let i = 0; i < n; ++i) this.grid[i] = [];
  }

  private who(): Player {
    return this.turn % 2 === 0 ? this.players[1] : this.players[0];
  }

  public play(col: number) {
    !this.isFull(this.grid[col]) ? this.addToCol(col) : this.displayFull();
    this.check(col);
    let played: string = `Player ${this.who()} has a turn`;
    this.turn++;
    this.gameLogic();
    return played;
  }

  private isFull(row: Player[]): boolean {
    return row.length === 7 ? true : false;
  }

  private displayFull() {
    console.log("Column full!");
  }

  private noWinner() {
    if (this.turn === 42) console.log("No winner");
  }

  private returTurn() {
    return;
  }

  private addToCol(col: number) {
    this.grid[col].push(this.who());
  }

  private check(col: number) {
   
    let stack: number[]= [];
    

    for (let i = 0; i <= this.grid.length; i++) {
      this.grid[i].length >= this.grid[col].length ? stack.push(1)
    }
  }
}

export class Player {
  public id: number;

  constructor(id: number) {
    this.id = id;
  }
}

let game;
game = new Connect4();
game.play(0);
game.play(0);
game.play(1);
game.play(1);
game.play(2);
game.play(2);
game.play(3);
debugger;
// game.play(2);
// game.play(3);
// game.play(3);
// game.play(4);
// game.play(4);
console.log(game.grid);
