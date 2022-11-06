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

const getPotatoes = () => {
  return new Promise((resolve, reject) => {
    const potatoes = "🥔🥔🥔";
    console.log("Getting potatoes");
    setTimeout(function () {
      resolve(potatoes);
    }, 1000);
  });
};

const cutPotatoes = (potatoes) => {
  return new Promise((resolve, reject) => {
    const cutPotatoes = "🥔+🔪";
    console.log("Cutting potatoes");
    setTimeout(function () {
      resolve(cutPotatoes);
    }, 1000);
  });
};

const fryPotatoes = (cutPotatoes) => {
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

// Successful Promise.all()
Promise.all([addOne(1), addOne(2), addOne(3)]).then((res) => {
  console.log(res); // Output: [ 2, 3, 4 ]
});

// Failed Promise.all()
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

// Successful Promise.any()
Promise.any([failingPromise(), addOne(1), addOneSlow(2)]).then((res) => {
  console.log(res); // Output: 2
});

// Failed Promise.any()
Promise.any([failingPromise(), failingPromise()])
  .then((res) => console.log(res))
  .catch((e) => {
    console.log(e); // Output (Error): AggregateError: All promises were rejected
  });

/// Async & Await
/**
 * The async and await keywords enable asynchronous, promise-based behavior to be
 * written in a cleaner style, avoiding the need to explicitly configure promise
 * chains.
 *
 * An async function is a function declared with the async keyword, and the await
 * keyword is permitted within it.
 *
 * Await pauses the program to wait for an async functions to resolve or reject,
 * and return the Promise result or throw an error (which can be caught using
 * try/catch block), like a synchronous function.
 *
 * Let's rewrite the fry making example using the async and await.
 */
{
  const makeFries = async () => {
    const potatoes = await getPotatoes();
    const _cutPotatoes = await cutPotatoes(potatoes);
    const friedPotatoes = await fryPotatoes(_cutPotatoes);
    return friedPotatoes;
  };

  serve(await makeFries());
  /*
  Output:
  Getting potatoes
  Cutting potatoes
  frying potatoes
  Fries are ready.
  */
}
/**
 * Explanation:
 * We can call the asynchronous function as if they were synchronous function by
 * using async and await.
 */

/// Questions

// Question 1: What's the output?
{
  console.log("start");

  const promise1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
  });

  promise1.then((res) => {
    console.log(res);
  });

  console.log("end");
}

/**
 * Explanation:
 * When a Promise is initialized, it'll find the synchronous code inside it, and
 * execute them right away.
 *
 * The console.log(1) inside the Promise's definition is synchronous, and that is
 * why it'll be executed immediately (That is, on initialization).
 *
 * Javascript will skip promise1.then() as it is asynchronous in nature.
 *
 * Then javascript will execute console.log("end").
 *
 * Finally the promise will get resolved and print out the result.
 *
 * Output:
 * start
 * 1
 * end
 * 2
 */

// Question 2: What's the output?
{
  console.log("start");

  const promise1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
    console.log(3);
  });

  promise1.then((res) => {
    console.log(res);
  });

  console.log("end");
}
/**
 * Explanation:
 * As we know from the last example, Promises execute the synchronous code them
 * on initialization.
 *
 * console.log(3) is synchronous.
 *
 * Therefore, it'll be printed right after console.log(1).
 *
 * Output:
 * start
 * 1
 * 3
 * end
 * 2
 */

// Question 3: What's the output?
{
  console.log("start");

  const fn = () =>
    new Promise((resolve, reject) => {
      console.log(1);
      resolve("success");
    });

  console.log("middle");

  fn().then((res) => {
    console.log(res);
  });

  console.log("end");
}
/**
 * Explanation:
 * We know that a Promise executes the synchronous code on initialization.
 *
 * Here in this example, the Promise gets initialized when the function fn()
 * returns it.
 *
 * Therefore, the synchronous code inside the Promise only runs after fn() is
 * called.
 *
 * So, console.log("start") is first run. Then we move to declaring function fn
 * that returns a Promise (which doesn't not constitute initializing it).Then we
 * run console.log("middle"). Then fn() is called, which initializes the Promise,
 * rendering console.log(1) being called. We attach the .then() handler to the
 * Promise, but it'll be called later as it is asynchronous. Then we call
 * console.log("end"). Finally the promise is resolved which prints out "success".
 *
 * Output:
 * start
 * middle
 * 1
 * end
 * success
 */

// Question 4: What's the output?

{
  function job() {
    return new Promise(function (resolve, reject) {
      reject();
    });
  }

  let promise = job();

  promise
    .then(function () {
      console.log("Success 1");
    })
    .then(function () {
      console.log("Success 2");
    })
    .then(function () {
      console.log("Success 3");
    })
    .catch(function () {
      console.log("Error 1");
    })
    .then(function () {
      console.log("Success 4");
    });

  /*
    Output:
    Error 1
    Success 4
    */
}

// Question 5: What's the output?
{
  function job(state) {
    return new Promise((resolve, reject) => {
      if (state) resolve("success");
      else reject("error");
    });
  }

  let promise = job(true);

  promise
    .then((data) => {
      console.log(data);
      return job(false);
    })
    .catch((error) => {
      console.log(error);
      return "Error caught";
    })
    .then((data) => {
      console.log(data);
      return job(true);
    })
    .catch((error) => {
      console.log(error);
    });

  /*
  Output:
  success
  error
  Error caught
  */
}

// Question 6: What's the output?
{
  function job(state) {
    return new Promise((resolve, reject) => {
      if (state) resolve("success");
      else reject("error");
    });
  }

  let promise = job(true);

  promise
    // Step 1
    .then((data) => {
      console.log(data);
      return job(false);
    })
    // Step 2
    .then((data) => {
      if (data !== "Victory") {
        throw "Defeat";
      }
      return job(true);
    })
    // Step 3
    .then((data) => {
      console.log(data);
    })
    // Step 4
    .catch((error) => {
      console.log(error);
      return job(false);
    })
    // Step 5
    .then((data) => {
      console.log(data);
      return job(true);
    })
    // Step 6
    .catch((error) => {
      console.log(error);
      return "Error caught";
    })
    // Step 7
    .then((data) => {
      console.log(data);
      return new Error("test");
    })
    // Step 8
    .then((data) => {
      console.log("Success:", data.message);
    })
    // Step 9
    .catch((data) => {
      console.log("Error:", data.message);
    });

  /**
   * Explanation:
   *
   * Step 1 - runs and logs "success" and returns rejected Promise
   * Step 2 - this step won't run -> .then() on a rejected Promise
   * Step 3 - this step won't run either -> .then() on a rejected Promise
   * Step 4 - runs and logs "error" and returns rejected Promise
   * Step 5 - this step won't run -> .then() on a rejected Promise
   * Step 6 - runs and logs "error" and returns <Resolved Promise>"Error caught"
   * Step 7 - runs and logs "Error caught" and returns <Resolved Promise<Error>>"test"
   * Step 8 - runs and logs "Success: test" returns Promise (not implicit)
   * Step 9 - this step won't run -> .catch() on a resolved Promise
   */

  /*
  Output:
  success
  error
  error
  Error caught
  Error: test
  */
}

/**
 * Question 7: Create a Promise called first Promise, which will resolve to text
 * "first", then create a second Promise which will resolve our first Promise.
 * Finally log the result of the first Promise.
 */
// Solution:
const firstPromise = new Promise((resolve, reject) => {
  resolve("First!");
});

const secondPromise = new Promise((resolve, reject) => {
  resolve(firstPromise);
});

secondPromise.then((res) => res).then(console.log); // Output: First!

// Question 8: Rewrite the following using async/await
try {
  function loadJson(url) {
    return fetch(url).then((response) => {
      if (response.status == 200) {
        return response.json();
      } else throw new Error(response.status);
    });
  }

  loadJson("https://fakeurl.com/no-such-user.json").catch((err) => {
    console.log(err);
  });
} catch (e) {}

// Rewrite
{
  async function loadJson() {
    let response = await fetch(url);

    if (response.status == 200) {
      return await response.json();
    }
    throw new Error(response.status);
  }

  try {
    await loadJson("https://fakeurl.com/no-such-user.json");
  } catch (err) {
    console.log("There is an error", err.status);
  }
}

// Question 9: Solve Promises recursively
// Solution:
function promRecurse(funcPromises) {
  if (funcPromises.length === 0) return;

  const currPromise = funcPromises.shift();

  currPromise.then(console.log).catch(console.error);
  promRecurse(funcPromises);
}

promRecurse([
  new Promise((resolve) => resolve("first promise")),
  new Promise((resolve) => resolve("second promise")),
  new Promise((resolve) => resolve("third promise")),
]);

/*
Output:
first promise
second promise
third promise
*/

/// POLYFILL for Promise
function PromisePolyfill(executor) {
  let onResolve, // callback passed thru .then()
    onReject, // callback passed thru .catch()
    isFulfilled = false,
    isRejected = false,
    isCalled = false,
    value;

  // Step 2
  function resolve(val) {
    isFulfilled = true;
    value = val;

    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }

  // Step 3
  function reject(val) {
    isRejected = true;
    value = val; // the error

    if (typeof onReject === "function") {
      onReject(val);
      isCalled = true;
    }
  }

  // Step 4
  this.then = (callback) => {
    onResolve = callback;

    if (isFulfilled && !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };

  // Step 5
  this.catch = (callback) => {
    onReject = callback;

    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }
    return this;
  };

  try {
    // Step 1
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

const examplePromise = new PromisePolyfill((resolve, reject) => {
  return setTimeout(() => {
    resolve(2);
  }, 1000);
});

examplePromise.then(console.log).catch(console.error); // Output: 2

/**
 * Explanation:
 *
 * Inside the executor function (step 1) at some point will call either resolve
 * (check step 2) or reject (check step 3).
 *
 * When resolve is called, the state of isFulfilled is set to true, and the result
 * passed as the argument it set to the value variable (check step 2). If
 * onResolve function is assigned (check step 4), then call it with the result
 * and then set isCalled to true.
 *
 * When reject is called, the state of isRejected is set to true, and the error
 * passed as the argument it set to the value variable (check step 3). If
 * onReject function is assigned (check step 5), then call it with the error and
 * then set isCalled to true.
 *
 * The onResolve and onReject callback are set using the 'then' and 'catch' method
 * respectively (check step 4 & 5).
 *
 * In the 'then' method, at step 4, if the promise is already resolved, it will
 * call the onResolve (that is the callback provided to 'then') with the value.
 *
 * In the 'catch' method, at step 5, if the promise is already rejected, it will
 * call the onReject (that is the callback provided to 'catch') with the error.
 *
 * // For success
 * .then() -> assigns -> onResolve
 * .then() -> calls -> onResolve(value) [IF isFulfilled]
 *
 * resolve() -> sets -> isFulfilled, value
 * resolve() -> calls -> onResolve(value) [IF onResolve is assigned]
 *
 * // For error
 * .catch() -> assigns -> onReject
 * .catch() -> calls -> onReject(value) [IF isRejected]
 *
 * reject() -> sets -> isRejected, value
 * reject() -> calls -> onReject(value) [IF onReject is assigned]
 */
