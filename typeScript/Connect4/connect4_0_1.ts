function flatMap<T, U>(
	array: T[],
	callbackfn: (value: T, index: number, array: T[]) => U[]
): U[] {
	return Array.prototype.concat(...array.map(callbackfn));
}

export class Connect4 {
	private grid: Token[][] = [];
	private players: Player[] = [];
	private turn: number;

	constructor() {
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
		if (!this.noWinner) {
		} else {
			this.addToCol(col);
		}
		this.turn++;
	}

	private Whoplay(): Player {
		return this.turn % 2 === 0 ? this.players[1] : this.players[0];
	}

	private addToCol(col: number) {
		this.grid[col].length === 7
			? this.isFull()
			: this.grid[col][0] === undefined
			? this.grid[col].push(new Token(0, col, this.Whoplay().getId()))
			: this.grid[col].push(
					new Token(this.grid[col].length, col, this.Whoplay().getId())
			  );
	}

	private isFull() {
		console.log(`Column is full`);
	}

	private isHoryzontal(): boolean {
		return true;
	}

	private noWinner(): boolean {
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
game.play(1);
game.play(1);
game.play(1);
game.play(1);
game.play(1);
game.play(1);
game.play(2);
game.play(2);
game.play(3);
debugger;
game.play(3);
game.play(4);
