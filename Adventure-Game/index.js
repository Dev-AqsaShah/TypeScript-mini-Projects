import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        this.fuel -= 25;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        this.fuel -= 25;
    }
}
(async () => {
    const playerNameResponse = await inquirer.prompt({
        type: "input",
        name: "name",
        message: "Please enter your name:"
    });
    const playerName = playerNameResponse.name;
    const opponentResponse = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "Select your opponent:",
        choices: ["Skeleton", "Assassin", "Zombie"]
    });
    const opponentName = opponentResponse.select;
    const player = new Player(playerName);
    const opponent = new Opponent(opponentName);
    do {
        const ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your action:",
            choices: ["Attack", "Drink Potion", "Run For Your Life.."]
        });
        if (ask.opt === "Attack") {
            const num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player.fuelDecrease();
                console.log(chalk.bold.red(`${player.name} fuel is ${player.fuel}`));
                console.log(chalk.bold.green(`${opponent.name} fuel is ${opponent.fuel}`));
                if (player.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                    process.exit();
                }
            }
            else {
                opponent.fuelDecrease();
                console.log(chalk.bold.red(`${opponent.name} fuel is ${opponent.fuel}`));
                console.log(chalk.bold.green(`${player.name} fuel is ${player.fuel}`));
                if (opponent.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        else if (ask.opt === "Drink Potion") {
            player.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your fuel is ${player.fuel}`));
        }
        else if (ask.opt === "Run For Your Life..") {
            console.log(chalk.red.bold.italic("You lose, better luck next time"));
            process.exit();
        }
    } while (true);
})();
