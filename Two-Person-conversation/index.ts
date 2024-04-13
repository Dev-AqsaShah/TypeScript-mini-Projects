#! /usr/bin/env 

import inquirer from "inquirer"
import chalk from "chalk"

class Student {
    name: string
    constructor(n:string){
        this.name=n
    }
}

class person {
    students:Student[]=[]

    addStudent(obj:Student) {
        this.students.push(obj);
    }
}

const persons = new person();



const programStart = async (persons: person) => {
    console.log(chalk.red.bold.italic("WELCOME GUEST"));

do{

    const ans = await inquirer.prompt({
        type: "list",
        name:"select",
        message: chalk.blue("With whom would you prefer to have a conversation?"),
        choices: ["yourself?", "student"]
    });

    if (ans.select == "yourself?"){
        
        console.log(chalk.italic.bold.yellow("hello, im talking to myself"));
        console.log(chalk.italic.bold.yellow("Conversing with myself allows me to explore ideas and brainstorm solutions"));
        continue;
    }

    if (ans.select = "student") {
        const ans = await inquirer.prompt({
            type: "input",
            message: chalk.blue("Who is on your mind to conversation?"),
            name: "student",
        });
      

        const student = persons.students.find(val => val.name == ans.student)
        // console.log(student);
        

        if(!student) {
            const name = new Student(ans.student)
            persons.addStudent(name)

            console.log(`${chalk.italic.green("Hello, I am ")}${chalk.yellow.italic(name.name)}${chalk.green.italic(", and I am good")}`);

            // console.log(persons.students);
        }

        if (student) {
            console.log(`Hello, i'm ${student.name}, and im fine.`);
            // console.log(persons.students);
        }
    }
   }while(true)
};

programStart(persons);