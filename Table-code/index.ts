#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

async function run() {
    while (true) {
        let userInput = await inquirer.prompt({
            name: "num1",
            message: chalk.blue("Please enter your number: "),
            type: "number",
            validate: (input) => {
                const num2 = parseInt(input);
                if (isNaN(num2)) {
                    return chalk.red("Please enter a numerical number.");
                } else {
                    return true;
                }
            }
        });

        // user input value
        let userNum: number = userInput.num1;

        console.log(chalk.green(`Multiplication Table for ${userNum}:`));
        // logic for table
        for (let i: number = 1; i <= 10; i++) {
            let result: number = userNum * i;
            console.log(chalk.yellow(`${userNum} x ${i} = ${result}`));
        }

        // Ask if the user wants to enter another number
        let again = await inquirer.prompt({
            name: "repeat",
            message: chalk.blue("Do you want to enter another number?"),
            type: "confirm",
            default: true
        });

        if (!again.repeat) {
            console.log(chalk.green("Goodbye!"));
            break;
        }
    }
}

// Call the async function
run();
