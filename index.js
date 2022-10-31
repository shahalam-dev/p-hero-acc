const { rejects } = require("assert");
const colors = require("colors");
const { resolve } = require("path");

// setTimeout(() => {
//   const user = { id: 1 };

//   console.log("🚀 ~ file: index.js ~ line 6 ~ setTimeout ~ user", user);
// }, 1000);

console.log("color is red".red);

//=================== promise ===================//
/**
 * there three state of promise
 * 1. pending
 * 2. resolved
 * 3. rejected
 */

const myPromise = new Promise((resolve, reject) => {
  const user = "sharif";
  if (!user) {
    reject("Something went wrong!");
  } else {
    setTimeout(() => {
      resolve("successful");
    }, 1000);
  }
});

// myPromise
//   .then((res) => console.log(res))
//   .catch((res) => console.log(res))
//   .finally(console.log("Promise calling finished...".green));

// do asynchronous task in synchronous task

const userIds = [1, 2, 3, 4, 5];
let userData = [];

for (let i = 0; i < userIds.length; i++) {
  userData.push(myPromise);
}

Promise.all(userData)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err.message));

// lec - 3
async function getError() {
  try {
    const customError = new Error("this is custom error");
    throw customError;
  } catch (error) {
    errorHandler(error);
  }
}

getError();

function errorHandler(error) {
  const { name, message, stack } = error;
  console.log(name, message);
}
