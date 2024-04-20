#!/usr/bin/env node
import inquirer from "inquirer";
import fetch from "node-fetch";
import chalk from "chalk";
const apiLink = "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple";
let fetchData = async (data) => {
    let fetchQuiz = await fetch(data);
    let res = await fetchQuiz.json();
    return res.results;
};
(async () => {
    let data = await fetchData(apiLink);
    let startQuiz = async () => {
        let score = 0;
        let name = await inquirer.prompt({
            type: "input",
            name: "fname",
            message: "What is your name?",
        });
        for (let i = 0; i < 10; i++) {
            let answers = [...data[i].incorrect_answers, data[i].correct_answer];
            let answer = await inquirer.prompt({
                type: "list",
                name: "quiz",
                message: data[i].question,
                choices: answers.map((val) => val),
            });
            if (answer.quiz == data[i].correct_answer) {
                ++score;
            }
        }
        console.log(chalk.green("Final Score for ") + chalk.blue(name.fname) + ": " + score);
    };
    startQuiz();
})();
