/**
 * Typescript Type Detection, Type Narrowing, and Type Guard
 *
 * Hitesh Choudhary
 * https://www.youtube.com/watch?v=ZchBYjHFCC4
 */

function detectType(val: number | string ){
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}

function provideId(id: string | null){
  if(!id){
    console.log("Please provide ID");
    return;
  }
  id.toLowerCase()
}