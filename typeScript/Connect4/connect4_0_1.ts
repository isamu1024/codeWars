export class Connect4 {
  private grid: Token[][] = [];
  private players: Player[] = [];
  private turn: number;
  private lastToken: Token | null;

  constructor() {
    this.generate(7);
    this.players.push(Player.create(1));
    this.players.push(Player.create(2));
    this.turn = 1;
    this.lastToken = null;
  }

  // Generate necessary column [[col],[col],[col]....]
  private generate(row: number) {
    for (let i = 0; i < row; i++) {
      this.grid[i] = [];
    }
  }

  // core mechanics
  public play(col: number) {
    if (!this.tieGame) {
    } else {
      this.addToCol(col);
    }

    if (this.isHoryzontal() || this.isVertical()) console.log(`Winner !!!`);

    this.turn++;
  }

  private Whoplay(): Player {
    return this.turn % 2 === 0 ? this.players[1] : this.players[0];
  }

  private addToCol(col: number) {
    this.grid[col].length === 7
      ? this.isFull()
      : this.grid[col][0] === undefined
      ? this.grid[col].push(
          this.createToken(0, col, this.Whoplay().getId(), this.turn)
        )
      : this.grid[col].push(
          this.createToken(
            this.grid[col].length,
            col,
            this.Whoplay().getId(),
            this.turn
          )
        );
  }

  private createToken(
    row: number,
    col: number,
    PlayerId: number,
    turn: number
  ) {
    return (this.lastToken = new Token(row, col, PlayerId, turn));
  }

  private isFull() {
    console.log(`Column is full`);
  }

  private isHoryzontal(): boolean {
    if (this.lastToken === null) return false;

    let row = this.lastToken.tRow;
    let stackCheck = [];
    let tokenRow: number | null = this.lastToken.tRow;
    let playerId: number | null = this.lastToken.tGetPlayerId;

    for (let i = 0; i <= this.grid.length - 1; i++) {
      this.grid[i][tokenRow] === undefined
        ? (stackCheck = [])
        : this.grid[i][tokenRow].tGetPlayerId === playerId
        ? stackCheck.push(this.grid[i][tokenRow])
        : (stackCheck = []);

      if (stackCheck.length === 4) return true;
    }

    return false;
  }

  private isVertical(): boolean {
    if (this.lastToken === null) return false;

    let col = this.lastToken.tCol;
    let stackCheck = [];
    let playerId: number | null = this.lastToken.tGetPlayerId;

    for (let i = 0; i <= this.grid[col].length; i++) {
      this.grid[col][i] === undefined
        ? (stackCheck = [])
        : this.grid[col][i].tGetPlayerId === playerId
        ? stackCheck.push(this.grid[col][i])
        : (stackCheck = []);

      if (stackCheck.length === 4) return true;
    }

    return false;
  }

  private isDiagonal(): boolean {
    if (this.lastToken === null) return false;

    let row = this.lastToken.tRow;
    let stackCheck = [];
    let tokenRow: number | null = this.lastToken.tRow;
    let tokenCol: number | null = this.lastToken.tCol;
    let playerId: number | null = this.lastToken.tGetPlayerId;

    for (let i = 0; i <= 4; i++) {
      for (let j = 0; j <= 6; j++) {
        playerId === this.grid[i][j].tGetPlayerId
          ? stackCheck.push(this.grid[i][j])
          : (stackCheck = []);

        if (stackCheck.length === 4) return true;
      }
    }
    return false;
  }

  private tieGame(): boolean {
    return this.turn === 42 ? true : false;
  }
}
export class Player {
  private id: number;

  private constructor(id: number) {
    this.id = id;
  }

  static create(id: number) {
    return new Player(id);
  }

  public getId() {
    return this.id;
  }
}

export class Token {
  private row: number;
  private col: number;
  private PlayerId: number;
  private turn: number;

  constructor(row: number, col: number, PlayerId: number, turn: number) {
    this.row = row;
    this.col = col;
    this.PlayerId = PlayerId;
    this.turn = turn;
  }

  get tRow(): number {
    return this.row;
  }

  get tCol(): number {
    return this.col;
  }

  get tGetPlayerId(): number {
    return this.PlayerId;
  }

  get tGetTurn(): number {
    return this.turn;
  }
}

const game: Connect4 = new Connect4();
game.play(3); //1
game.play(4); //2
game.play(4); //1
game.play(4); //2
game.play(5); //1
game.play(5); //2
game.play(5); //1
game.play(5); //2
game.play(6); //1
game.play(6); //2
game.play(6); //1
game.play(6); //2
game.play(6); //1
