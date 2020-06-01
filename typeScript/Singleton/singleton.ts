export class SingletonCounter {
  private static instance: SingletonCounter;
  private counter: number;

  private constructor() {
    this.counter = 0;
  }

  public static getInstance(): SingletonCounter {
    if (!SingletonCounter.instance) {
      SingletonCounter.instance = new SingletonCounter();
    }
    return this.instance;
  }

  public inc(): number {
    this.counter++;
    return this.counter;
  }
}
