#! /usr/bin/env node
import inquirer from "inquirer";
async function getInputUser() {
    const answers = await inquirer.prompt([
        {
            name: "firstNumber",
            type: "input",
            message: "Enter first number: ",
            validate: function (input) {
                if (isNaN(input)) {
                    return "Not a valid number";
                }
                else {
                    return true;
                }
            },
        },
        {
            name: "secondNumber",
            type: "input",
            message: "Enter second number: ",
            validate: function (input) {
                if (isNaN(input)) {
                    return "Not a valid number";
                }
                else {
                    return true;
                }
            },
        },
        {
            name: "operation",
            type: "list",
            message: "Select an operation: ",
            choices: ["+", "-", "/", "*"],
        },
    ]);
    const firstnumber = Number(answers.firstNumber);
    const secondnumber = Number(answers.secondNumber);
    const operators = answers.operation;
    // perform operations on numbers
    switch (operators) {
        case "+":
            console.log(firstnumber + secondnumber);
            break;
        case "-":
            console.log(firstnumber - secondnumber);
            break;
        case "/":
            console.log(firstnumber / secondnumber);
            break;
        case "*":
            console.log(firstnumber * secondnumber);
            break;
        default:
            break;
    }
}
async function startAgain() {
    do {
        await getInputUser();
        var answers = await inquirer.prompt({
            name: "restart",
            type: "confirm",
            message: "Want to restart?",
        });
    } while (answers.restart === true);
}
await startAgain();
