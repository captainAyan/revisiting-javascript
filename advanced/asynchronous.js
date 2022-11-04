/**
 * Async/await, Promises and Asynchronous stuff
 *
 * Roadside Coder
 * https://youtu.be/HaJdoFp2OEc
 *
 * MDN Docs
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 */

/**
 * Lets discuss the difference between Synchronous and Asynchronous Code
 *
 * Synchronous (Blocking): When you execute something synchronously, you wait for
 * it to finish before moving on to another task.
 *
 * Task 1 ==========
 * Task 2           ====
 * Task 3               ======
 * Task 4                     ===
 *
 *
 * Asynchronous (Non-Blocking): When you execute something asynchronously, you
 * can move on to another task before it finishes.
 *
 * Task 1 ==========
 * Task 2 ====
 * Task 3 ======
 * Task 4 ===
 *
 */

// Sync
console.log("Start");
console.log("This is an example of a synchronous code.");
console.log("Finish");
/*
Output:
Start
This is an example of a synchronous code.
Finish
*/

// Async (example 1)
console.log("Start");
setTimeout(() => {
  console.log("This is an example of an asynchronous code");
}, 1000);
console.log("Finish");
/*
Output:
Start
Finish
This is an example of a synchronous code.
*/

/**
 * Explanation:
 *
 * In the example of the async code, we can see that Javascript doesn't wait for
 * the execution of the setTimeout function. Instead, Javascript first executes
 * all the synchronous code first, and then runs the asynchronous code.
 */

// Async (example 2)

function importantAction(username) {
  setTimeout(() => {
    return `Subscribe to ${username}`;
  }, 1000);
}

console.log("Start");
const message = importantAction("Roadside Coder");
console.log(message);
console.log("Stop");
/*
Output:
Start
undefined
Stop
*/

/**
 * Explanation:
 *
 * In the above example, the importantAction function returned nothing, that is,
 * the setTimeout inside the function didn't run until later.
 */

// Using callbacks to fix the issue
function importantActionCallback(username, cb) {
  setTimeout(() => {
    cb(`Subscribe to ${username}`);
  }, 1000);
}

console.log("Start");
importantActionCallback("Roadside Coder", (msg) => {
  console.log(msg);
});
console.log("Stop");
/*
Output:
Start
Stop
Subscribe to Roadside Coder
*/

/**
 * Explanation:
 *
 * In the above example, the importantActionCallback function runs at the very
 * last, as it is an asynchronous code, but unlike the previous example, the
 * message is actually displayed.
 */

/**
 * IMPORTANT: The amount of delay in the setTimeout function has no bearing on
 * it being asynchronous. The setTimeout function will be asynchronous with the
 * delay of ZERO millisecond.
 */

/// Promises
/**
 * The Promise object represents the eventual completion (or failure) of an
 * asynchronous operation and its resulting value.
 *
 * A Promise is a proxy for a value that is not yet known. This value may become
 * known later, but for the time being the Promise will act line a placeholder.
 *
 * Using Promises, an asynchronous function can return a value (promise)
 * immediately like a synchronous function.
 */

// Basic example of a promise
console.log("Start");

const sub = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) resolve("Subscribe to Roadside Coder");
    else reject(new Error("Why aren't you subscribed to Roadside Coder?"));
  }, 2000);
});

sub
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

console.log("Stop");

/*
Output:
Start
Stop
Subscribe to Roadside Coder
*/

/// Solving 'callback hell' using Promises

/**
 * Let's make a fries
 *
 * Steps:
 * 1. Get the potatoes
 * 2. Cut the potatoes
 * 3. Fry the potatoes
 * 4. Serve the fries
 */
{
  const getPotatoes = (nextStep) => {
    const potatoes = "🥔🥔🥔";
    console.log("Getting potatoes");
    setTimeout(function () {
      nextStep(potatoes);
    }, 1000);
  };

  const cutPotatoes = (potatoes, nextStep) => {
    const cutPotatoes = "🥔+🔪";
    console.log("Cutting potatoes");
    setTimeout(function () {
      nextStep(cutPotatoes);
    }, 1000);
  };
  const fryPotatoes = (cutPotatoes, nextStep) => {
    const friedPotatoes = "🛢️+🔥=🍟";
    console.log("Frying potatoes");
    setTimeout(function () {
      nextStep(friedPotatoes);
    }, 1000);
  };

  const serve = (fries) => {
    console.log("Fries are ready.");
  };

  const makeFries = (nextStep) => {
    getPotatoes(function (potatoes) {
      cutPotatoes(potatoes, function (cutPotatoes) {
        fryPotatoes(cutPotatoes, function (friedPotatoes) {
          nextStep(friedPotatoes);
        });
      });
    });
  };

  // Make and serve the fries
  makeFries((fries) => {
    serve(fries);
  });
}
/*
Output:
Getting potatoes
Cutting potatoes
Frying potatoes
Fries are ready.
*/

/**
 * Clearly, the code does the job, but isn't very easy to read. Let's rewrite the
 * same program using promises
 */
{
  const getPotatoes = () => {
    return new Promise((resolve, reject) => {
      const potatoes = "🥔🥔🥔";
      console.log("Getting potatoes");
      setTimeout(function () {
        resolve(potatoes);
      }, 1000);
    });
  };

  const cutPotatoes = () => {
    return new Promise((resolve, reject) => {
      const cutPotatoes = "🥔+🔪";
      console.log("Cutting potatoes");
      setTimeout(function () {
        resolve(cutPotatoes);
      }, 1000);
    });
  };

  const fryPotatoes = () => {
    return new Promise((resolve, reject) => {
      const friedPotatoes = "🛢️+🔥=🍟";
      console.log("Frying potatoes");
      setTimeout(function () {
        resolve(friedPotatoes);
      }, 1000);
    });
  };

  const serve = (fries) => {
    console.log("Fries are ready.");
  };

  const makeFries = () => {
    return getPotatoes()
      .then((potatoes) => cutPotatoes(potatoes))
      .then((cutPotatoes) => fryPotatoes(cutPotatoes));
  };

  // Make and serve the fries
  makeFries().then((fries) => serve(fries));
}
/*
Output:
Getting potatoes
Cutting potatoes
Frying potatoes
Fries are ready.
*/

/**
 * This implementation is much cleaner.
 *
 * Explanation:
 * As you can see that the .then() methods can be chained to execute asynchronous
 * functions synchronously (one after another). The .then() method can take a
 * second argument, that is the handler for rejected Promise.
 *
 * The returned value of the callback function inside of .then() is the result of
 * it's Promise. (See the following code)
 */
const addOne = (x) => new Promise((resolve, reject) => resolve(x + 1));

addOne(2)
  .then((x) => {
    console.log(x); // Output: 3
    return x * 3; // <- non-Promise value is returned
  })
  .then((x) => {
    // Returned value of previous .then() is passed to chained .then() method
    console.log(x); // Output: 9
  });

/// Promise Combinators (4 types of combinators)
/**
 * 1. Promise.all() - It executes all the promises at once, and returns the
 * results in an array. If one of the promises is rejected, the whole thing
 * fails.
 */

const failingPromise = () =>
  new Promise((_, reject) => reject("Failing Promise has failed"));

Promise.all([addOne(1), addOne(2), addOne(3)]).then((res) => {
  console.log(res); // Output: [ 2, 3, 4 ]
});

Promise.all([addOne(1), failingPromise(), addOne(3)])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err)); // Output: Failing Promise has failed

/**
 * 2. Promise.race() - It returns the first Promise that gets fulfilled or
 * rejected.
 */
const addOneSlow = (x) =>
  new Promise((resolve) => setTimeout(resolve(x + 1), 1000));

Promise.race([addOne(1), addOneSlow(2)]).then((res) => {
  console.log(res); // Output: 2
});

/**
 * Explanation: The addOne(1) returns 2 immediately, as oppose to addOneSlow(2)
 * which takes 1 second to return the result. Clearly, the former is first Promise
 * to get fulfilled, hence the result is 2
 */

/**
 * 3. Promise.allSettled() - It executes all the promises at once, and returns the
 * results in an array. Unlike Promise.all(), it don't fail if a Promise is
 * rejected.
 */
Promise.allSettled([addOne(1), failingPromise()]).then((res) => {
  console.log(res);
  /*
  Output:
  [
    {status: 'fulfilled', value: 2},
    {status: 'rejected', reason: 'Failing Promise has failed'}
  ]
  */
});

/**
 * 4. Promise.any() - It returns the first Promise to get fulfilled. If all the
 * Promises gets rejected, then it calls .catch();
 */
Promise.any([failingPromise(), addOne(1), addOneSlow(2)]).then((res) => {
  console.log(res); // Output: 2
});

Promise.any([failingPromise(), failingPromise()])
  .then((res) => console.log(res))
  .catch((e) => {
    console.log(e); // Output (Error): AggregateError: All promises were rejected
  });
