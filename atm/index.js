#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { createSpinner } from "nanospinner";
let userStoredId;
let userStoredPin;
let totalBalance = 100000;
let remainingBalance = 0;
let count = 0;
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
// create a function for register user first time when program run
async function registerUser() {
    console.log(chalk.bold.yellow.underline("Register Your User ID!"));
    const registerUserData = await inquirer.prompt([
        {
            name: "userID1",
            type: "input",
            message: "Enter your id",
            validate: function (input) {
                if (input == "") {
                    return "Enter a validate UserID";
                }
                else {
                    return true;
                }
            },
        },
        {
            name: "userPin1",
            type: "password",
            message: "Enter your pin",
            validate: function (input) {
                if (isNaN(input) || input == "") {
                    return "Enter a validate Number";
                }
                else {
                    return true;
                }
            },
        },
    ]);
    userStoredId = registerUserData.userID1;
    userStoredPin = Number(registerUserData.userPin1);
    console.clear();
}
// create a user process function in which user can login there ATM account
async function userProcess() {
    console.log(chalk.bold.green("Login Your Account!"));
    do {
        var userData = await inquirer.prompt([
            {
                name: "userID",
                type: "input",
                message: "Enter your id",
            },
            {
                name: "userPin",
                type: "password",
                message: "Enter your pin",
            },
        ]);
        var Userpin = Number(userData.userPin);
        if (userData.userID === userStoredId && Userpin === userStoredPin) {
            console.clear();
        }
        else {
            console.log(chalk.bold.red("Your User ID and pin is not correct try again!"));
        }
    } while (userData.userID !== userStoredId || Userpin !== userStoredPin);
}
// Create Main menu of ATM in which different menu will be deifferents
async function mainMenu() {
    async function balance() {
        if (count > 0) {
            console.log("Your Total Balance is: Rs " + chalk.bold.blue(remainingBalance));
        }
        else {
            console.log("Your Total Balance is: Rs " + chalk.bold.blue(totalBalance));
        }
    }
    console.log(chalk.bold.yellow("--------------------\n|Welcome to the ATM|\n|Balance is: " +
        totalBalance + "|" +
        "\n--------------------"));
    const mainMenuAnswer = await inquirer.prompt([
        {
            name: "menu",
            type: "list",
            message: "Select an option !",
            choices: ["Fund Transfer", "Bill Payment", "Balance Inquiry"],
        },
    ]);
    // create a fund transfer function in which user can select different fund transfer options
    async function fundTransfer() {
        const fundTransferMenu = await inquirer.prompt([
            {
                name: "banks",
                type: "list",
                message: "Select a Bank!",
                choices: ["HBL", "ABL", "MCB", "Meezan Bank"],
            },
            {
                name: "recipient",
                type: "list",
                message: "Select a recipient!",
                choices: ["Ahmed", "Waheed", "Adil", "Akram"],
            },
            {
                name: "amount",
                type: "input",
                message: "Enter Amount for fund transfer!",
                validate: function (input) {
                    if (isNaN(input) || input == "") {
                        return "Enter a validate Number";
                    }
                    else {
                        return true;
                    }
                },
            },
        ]);
        let fundTransferAmount = Number(fundTransferMenu.amount);
        remainingBalance = totalBalance - fundTransferAmount;
        const spiner = createSpinner("Processing..").start();
        await sleep();
        spiner.success({
            text: "Fund has been sent to " + chalk.bold.green(fundTransferMenu.recipient),
        });
        count += 1;
        totalBalance = remainingBalance;
    }
    // create a function in which user can select and pay utility bills
    async function billPayment() {
        let billPaymentMenu = await inquirer.prompt([
            {
                name: "UtilityBills",
                type: "list",
                choices: ["Electicity", "Gas", "Water"],
            },
            {
                name: "amount",
                type: "input",
                message: "Enter Amount for fund transfer!",
                validate: function (input) {
                    if (isNaN(input) || input == "") {
                        return "Enter a validate Number";
                    }
                    else {
                        return true;
                    }
                },
            },
        ]);
        let fundTransferAmount = Number(billPaymentMenu.amount);
        remainingBalance = totalBalance - fundTransferAmount;
        const spiner = createSpinner("Processing..").start();
        await sleep();
        spiner.success({
            text: "Your " +
                chalk.bold.green(billPaymentMenu.UtilityBills) +
                " bill has been paid ",
        });
        count += 1;
        totalBalance = remainingBalance;
    }
    // create a function in which user can check there balance
    switch (mainMenuAnswer.menu) {
        case "Fund Transfer":
            await fundTransfer();
            break;
        case "Bill Payment":
            await billPayment();
            break;
        case "Balance Inquiry":
            await balance();
            break;
        default:
            break;
    }
}
// loop main menu if user want to confirm transaction more
async function repeat() {
    do {
        await mainMenu();
        await sleep();
        var answers = await inquirer.prompt({
            name: "restart",
            type: "confirm",
            message: "Want to continue more transaction?",
        });
        console.clear();
    } while (answers.restart === true);
}
await registerUser();
await userProcess();
await repeat();
