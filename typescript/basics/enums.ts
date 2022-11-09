/**
 * Typescript Enums
 *
 * Hitesh Choudhary
 * https://www.youtube.com/watch?v=ZchBYjHFCC4
 */

enum SeatChoice {
  AISLE = 10,
  MIDDLE,
  WINDOW,
}

let acSeat = SeatChoice.MIDDLE;

console.log(SeatChoice.AISLE); // Output: 10

/**
 * once a enum member is assigned a number, the following ones adapt the next
 * number. AISLE was assigned 10, therefore, MIDDLE and WINDOW automatically
 * became 11 and 12 respectively.
 */
console.log(SeatChoice.MIDDLE); // Output: 11
console.log(SeatChoice.WINDOW); // Output: 12

// String enums (for a string enums, every member must be initialized)
enum Gender {
  FEMALE = "female",
  MALE = "male",
  OTHER = "other",
}

// Heterogeneous enums
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}

export {}