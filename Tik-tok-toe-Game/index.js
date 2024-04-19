#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
let a = " ", b = " ", c = " ", d = " ", e = " ", f = " ", g = " ", h = " ", i = " ";
let arr = [a, b, c, d, e, f, g, h, i];
console.log(chalk.yellow.bold(`
      1  2  3

 1   { }{ }{ }
 2   { }{ }{ } 
 3   { }{ }{ }`));
while (true) {
    const answer = await inquirer.prompt([
        {
            name: "row",
            type: "number",
            message: chalk.yellow.italic.underline("Select the row (1-3)"),
            validate: (value) => {
                if (value >= 1 && value <= 3) {
                    return true;
                }
                else {
                    return chalk.blue.italic.bold("Row number must be between 1 and 3.");
                }
            }
        },
        {
            name: "column",
            type: "number",
            message: chalk.yellow.italic.underline("Select the column (1-3)"),
            validate: (value) => {
                if (value >= 1 && value <= 3) {
                    return true;
                }
                else {
                    return chalk.blue.italic.bold("Column number must be between 1 and 3.");
                }
            }
        }
    ]);
    let { row, column } = answer;
    row--;
    column--;
    if (arr[row * 3 + column] === " ") {
        arr[row * 3 + column] = chalk.blue.bold("X");
    }
    let remainingPositions = arr.filter(i => i != chalk.red.bold("X") && i != chalk.green.bold("O"));
    if (remainingPositions.length === 0) {
        console.log(chalk.blue.bold.italic("It's a draw!"));
        break;
    }
    let computerGuessed = Math.floor(Math.random() * remainingPositions.length);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === " " && remainingPositions.includes(arr[i])) {
            if (computerGuessed === 0) {
                arr[i] = chalk.red.bold("O");
                break;
            }
            computerGuessed--;
        }
    }
    let result = chalk.yellow.bold(`   
     1  2  3   

1   {${arr[0]}}{${arr[1]}}{${arr[2]}}
2   {${arr[3]}}{${arr[4]}}{${arr[5]}} 
3   {${arr[6]}}{${arr[7]}}{${arr[8]}}`);
    console.log(result);
    let winner = checkWinner(arr);
    if (winner) {
        console.log(chalk.blue.bold.italic(`${winner} wins! `));
        break;
    }
}
// let arr = [a,b,c,d,e,f,g,h,i]
// values are "X" and "O"
function checkWinner(arr) {
    // Check rows, columns, and diagonals for a win
    for (let i = 0; i < 3; i++) {
        if (arr[i * 3] === arr[i * 3 + 1] && arr[i * 3] === arr[i * 3 + 2] && arr[i * 3] !== " ") {
            return arr[i * 3];
        }
        if (arr[i] === arr[i + 3] && arr[i] === arr[i + 6] && arr[i] !== " ") {
            return arr[i];
        }
    }
    if (arr[0] === arr[4] && arr[0] === arr[8] && arr[0] !== " ") {
        return arr[0];
    }
    if (arr[2] === arr[4] && arr[2] === arr[6] && arr[2] !== " ") {
        return arr[2];
    }
    return null;
}
