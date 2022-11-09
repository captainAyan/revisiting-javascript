/**
 * Typescript Abstract Classes
 *
 * Hitesh Choudhary
 * https://www.youtube.com/watch?v=ZchBYjHFCC4
 */

abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string
  ){}

  // a child will have to implement this method
  abstract getSepia() : void;

  // Unlike interfaces, some methods can be non-abstract
  getReelTime(): number {
    return 8;
  }
}

// const tp = new TakePhoto("on", "juno");//❌ cannot instantiate abstract class
// ⚠️ You can instantiate an Interface

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number) {
    super(cameraMode, filter)
  }

  getSepia(): void {} // an abstract method must be implemented

  testNonAbstractParentMethods(): number {
    return this.getReelTime();
  }
}

const ins = new Instagram("on", "lark", 3);
console.log(ins.testNonAbstractParentMethods()); // Output: 8

export {}