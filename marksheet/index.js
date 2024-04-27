#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//asking for roll num
let roll = await inquirer.prompt({
    type: "number",
    name: "num1",
    message: "please enter your roll number: "
});
// roll num
let rollNum = roll.num1;
//checking roll number
if (rollNum === 120120) {
    let marks = await inquirer.prompt([
        {
            name: "typescript",
            type: "number",
            message: "Please enter your typescript number:",
        },
        {
            name: "python",
            type: "number",
            message: "Please enter your python number:",
        },
        {
            name: "java",
            type: "number",
            message: "Please enter your java number:",
        },
    ]);
    //extract marks
    let ts = marks.typescript;
    let pyth = marks.python;
    let java = marks.java;
    //percentage
    let totalMarks = 300;
    let obtainMarks = ts + pyth + java;
    let percent = ((obtainMarks / totalMarks) * 100);
    //answers
    console.log(chalk.blue("Name: aqsa shah"));
    console.log(chalk.green(`Typescript marks = ${ts} out of 100`));
    console.log(chalk.yellow(`Python marks = ${pyth} out of 100`));
    console.log(chalk.red(`Java marks = ${java} out of 100`));
    console.log(chalk.cyan(`Obtain Mark = ${obtainMarks} Total Marks = ${totalMarks}`));
    console.log(chalk.magenta(`Percentage = ${percent}%`));
}
else {
    console.log(chalk.red("Invalid roll number"));
}
