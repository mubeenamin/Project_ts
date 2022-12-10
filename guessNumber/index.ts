#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";


async function welcome() {
    figlet('Guessing Number Game',(err,data)=>{
        console.log(gradient.pastel.multiline(data)+'\n');
        
    });
    await sleep();
}
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
const randomNumber = Math.floor(Math.random() * 10);
async function guessNumber() {
  do {
    //Get input from user
    const userInput = await inquirer.prompt({
      name: "guess",
      type: "input",
      message: "Enter Number !",
    });
    //store input into variable
    var getNumber = Number(userInput.guess);
    //check number is correct or not
    if (randomNumber > getNumber) {
      console.log(chalk.bold.redBright("Ops! Your number is smaller try again! "));
    } else if (randomNumber < getNumber) {
      console.log(chalk.bold.redBright("Ops! Your number is greater try again! "));
    } else {
      console.log(chalk.bold.green("Congratulation you win !"));
    }
  } while (randomNumber !== getNumber);
}
// Heading string


await welcome();
console.log(gradient.atlas.multiline("Guess Number Between 1 and 10 !"));
await guessNumber();
