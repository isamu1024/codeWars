function flatMap<T, U>(
	array: T[],
	callbackfn: (value: T, index: number, array: T[]) => U[]
): U[] {
	return Array.prototype.concat(...array.map(callbackfn));
}

export class Check {
	protected static rowIsFull(row: Array<Token>): boolean {
		return row.length === 7 ? true : false;
	}

	protected static displayFull() {
		console.log(`Column full!`);
	}

	protected static noWinner(turn: number): boolean {
		return turn === 42 ? true : false;
	}

	protected static displayNoWinner() {
		console.log(`No winner`);
	}

	protected static isWinner(
		grid: Token[],
		token: Token,
		turn: number
	): boolean {
		return !this.enoughTurn(turn) ? false : this.Horizontal(token);
	}

	private static enoughTurn(turn: number) {
		return turn >= 4 ? true : false;
	}

	private static Horizontal(token: Token): boolean {}
}

export class Connect4 extends Check {
	private grid: Token[][] = [];
	private players: Player[] = [];
	private turn: number;

	constructor() {
		super();
		this.generate(7);
		this.players.push(Player.create(1));
		this.players.push(Player.create(2));
		this.turn = 1;
	}

	// Génère le nombre de colonne nécessaire en rajoutant des [] dans grid
	public generate(row: number) {
		for (let i = 0; i < row; i++) {
			this.grid[i] = [];
		}
	}

	public play(col: number) {
		if (Check.noWinner(this.turn)) {
			Check.displayNoWinner();
		} else {
			this.addToCol(col);
		}
	}

	private Whoplay(): Player {
		return this.turn % 2 === 0 ? this.players[0] : this.players[1];
	}

	private addToCol(col: number) {
		this.grid[col][0] === undefined
			? this.grid[col].push(new Token(col, 0, this.Whoplay().getId()))
			: this.grid[col].push(
					new Token(col, this.grid[col].length - 1, this.Whoplay().getId())
			  );
		debugger;
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

	constructor(row: number, col: number, PlayerId: number) {
		this.row = row;
		this.col = col;
		this.PlayerId = PlayerId;
	}

	public getRow() {
		return this.row;
	}

	public getCol() {
		return this.col;
	}

	public getPlayerId() {
		return this.PlayerId;
	}
}

let game;
game = new Connect4();
game.play(1);
game.play(1);
game.play(2);
game.play(2);
game.play(3);
game.play(3);
game.play(4);
