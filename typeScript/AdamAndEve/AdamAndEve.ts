/**
 *
 * You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve).
 * The first object in the array should be an instance of the class Man.
 * The second should be an instance of the class Woman.
 * Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.
 *
 */

export class God {
  /**
   * @returns Human[]
   */
  static create(): Array<Human> {
    let Human: Array<Human> = [new Man(), new Woman()];

    return Human;
  }
}

export abstract class Human {
  constructor() {}
}

export class Man extends Human {
  constructor() {
    super();
  }
}

export class Woman extends Human {
  constructor() {
    super();
  }
}
