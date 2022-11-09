/**
 * Typescript Classes Implementing Interfaces
 *
 * Hitesh Choudhary
 * https://www.youtube.com/watch?v=ZchBYjHFCC4
 */

interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
  click(): boolean;
}

interface Story {
  createStory(): string;
}

class Instagram implements TakePhoto, Story {
  // Instagram class must have all properties and method in TakePhoto and Story
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public username: string // Instagram class's own field
  ) {}

  click() {return true;}
  createStory() {return "Story is uploaded to instagram"}
}

class Youtube implements TakePhoto, Story {
  constructor(
    public short: string,
    public cameraMode: string,
    public filter: string,
    public burst: number,
  ) {}

  click() {return false;}
  createStory() {return "Story is added to your channel feed";}
}