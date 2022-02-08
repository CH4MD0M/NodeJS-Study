const chalk = require("chalk");
const validator = require("validator");
const getNotes = require("./notes");
// const fs = require("fs");

// fs.writeFileSync("notes.txt", "My name is Ch4md0m.");

// fs.appendFileSync("notes.txt", " I live in Korea.");
// const add = require("./utils.js");

// const name = "ch4md0m";
// const sum = add(4, 2);
// console.log(sum);

const msg = getNotes();
console.log(msg);

// const email = "test@example.com";
const url = "http://mead.io";
console.log(validator.isURL(url));

console.log(chalk.green.inverse.bold("Success!!"));
