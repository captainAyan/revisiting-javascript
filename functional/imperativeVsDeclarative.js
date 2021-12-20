/**
 * Imperative Vs Declarative
 *
 * Codeburst.io
 * https://codeburst.io/imperative-vs-declarative-javascript-8b5e45a602dd
 *
 * Freecodecamp
 * https://www.freecodecamp.org/news/imperative-vs-declarative-programming-difference/
 */

/**
 * Imperative code is where you explicitly spell out each step of how you want
 * something done.
 */

const passwords = [
  "123456",
  "password",
  "admin",
  "freecodecamp",
  "mypassword123",
];

let longPasswords = [];
for (let i = 0; i < passwords.length; i++) {
  const password = passwords[i];
  if (password.length >= 9) {
    longPasswords.push(password);
  }
}

console.log(longPasswords); // Output: ["freecodecamp", "mypassword123"];

/**
 * Declarative code you merely say what it is that you want done
 */

let longPasswords2 = passwords.filter((password) => password.length >= 9);

console.log(longPasswords2); // Output: ["freecodecamp", "mypassword123"];
