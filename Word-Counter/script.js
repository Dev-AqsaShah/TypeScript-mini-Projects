#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the words, letters, and vowels:"
    }
]);
const sentence = answers.Sentence.trim();
const words = sentence.split(/\s+/);
const letters = sentence.replace(/[^a-zA-Z]/g, "").length;
const vowels = sentence.replace(/[^aeiouAEIOU]/g, "").length;
console.log("Words:", words);
console.log(`Word count: ${words.length}`);
console.log(`Letter count: ${letters}`);
console.log(`Vowel count: ${vowels}`);
