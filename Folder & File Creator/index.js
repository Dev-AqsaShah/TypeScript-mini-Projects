#! /usr/bin/env node
import inquirer from "inquirer";
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
async function createFolderAndFile() {
    let input = await inquirer.prompt([{ name: "folderName", message: "Enter the folder name...", type: "input" }]);
    const folderName = input.folderName;
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
        console.log(chalk.green(`Folder "${folderName}" created successfully.`));
    }
    else {
        console.log(chalk.yellow(`Folder "${folderName}" already exists.`));
    }
    input = await inquirer.prompt([{ name: "fileName", message: "Enter the file name...", type: "input" }]);
    const fileName = input.fileName;
    input = await inquirer.prompt([{ name: "fileContent", message: "Enter the file content...", type: "input" }]);
    const fileContent = input.fileContent;
    const filePath = path.join(folderName, fileName);
    fs.writeFile(filePath, fileContent, (err) => {
        if (err) {
            console.error(chalk.red('Error creating file:', err));
            return;
        }
        console.log(chalk.green(`File "${fileName}" created successfully in folder "${folderName}"!`));
    });
}
createFolderAndFile();
