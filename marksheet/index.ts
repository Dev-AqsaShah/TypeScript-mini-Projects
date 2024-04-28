#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

//asking for name
let nameInput = await inquirer.prompt({
    type:"input",
    name: "userName",
    message: "Please enter your name: "
});
// name
let userName: string = nameInput.userName

//asking for roll num
let roll = await inquirer.prompt({
    type:"number",
    name: "num1",
    message: "Please enter your roll number: "
});
// roll num
let rollNum: number = roll.num1

//checking roll number
if (!isNaN(rollNum)) {
    
    let marks =await inquirer.prompt([
        {
            name:"typescript",
            type:"number",
            message:"Please enter your typescript number:",
        },
        {
            name:"python",
            type:"number",
            message:"Please enter your python number:",
        },
        {
            name:"java",
            type:"number",
            message:"Please enter your java number:",
        },
    ])
    
    //extract marks
    let ts:number = marks.typescript
    let pyth:number =marks.python
    let java:number =marks.java
    //percentage
    let totalMarks:number = 300
    let obtainMarks: number = ts + pyth + java
    let percent = ((obtainMarks/totalMarks)*100)

    //answers
    console.log(chalk.green(`Name: ${userName}`))
    console.log(chalk.green(`Typescript marks = ${ts} out of 100`))
    console.log(chalk.yellow(`Python marks = ${pyth} out of 100`))
    console.log(chalk.red(`Java marks = ${java} out of 100`))
    console.log(chalk.cyan(`Obtain Mark = ${obtainMarks} Total Marks = ${totalMarks}`))
    console.log(chalk.magenta(`Percentage = ${percent}%`))
    
} else {
    console.log(chalk.red("Invalid roll number"))
}
