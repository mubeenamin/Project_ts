#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todo = ["programing"];
// Print do to list using foreach loop
async function todoList() {
    console.clear();
    let text = "";
    function items(item, index) {
        text += index + ": " + item + "\n";
    }
    todo.forEach(items);
    console.log(chalk.bold.underline.green("Your todo List:\n"));
    console.log(chalk.bold.yellow(text));
}
// Add Item function
async function addItem() {
    let mainProcessAnswer = await inquirer.prompt({
        name: "main",
        type: "input",
        message: "Enter Item:",
    });
    let { main } = mainProcessAnswer;
    todo.push(main);
}
// Delete Item Function
async function delItem() {
    let delItemAnswer = await inquirer.prompt({
        name: "deleteItem",
        type: "list",
        message: "Select and item for delete",
        choices: todo,
    });
    let { deleteItem } = delItemAnswer;
    let indexFind = todo.indexOf(deleteItem);
    todo.splice(indexFind, 1);
}
// Main Menu
async function mainProcess() {
    console.clear();
    let mainOption = await inquirer.prompt({
        name: "option",
        type: "list",
        message: "Select an option:",
        choices: ["Add Item", "Delete Item", "Todo List", "Exit"],
    });
    let { option } = mainOption;
    switch (option) {
        case "Add Item":
            await addItem();
            break;
        case "Delete Item":
            await delItem();
            break;
        case "Todo List":
            await todoList();
            break;
        case "Exit":
            process.exit();
        default:
            break;
    }
}
// Repeat main Funcitons
async function repeatProcess() {
    do {
        await mainProcess();
        var getAnswer = await inquirer.prompt({
            name: "continue",
            type: "confirm",
            message: "Do you want to continue",
        });
    } while (getAnswer.continue === true);
}
await repeatProcess();
