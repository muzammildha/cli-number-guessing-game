#! /usr/bin/env node

import inquirer from "inquirer"

// 1) Computer will generate a number randomly. done

// 2) User input for guessing number. done

// 3) Compare user input with user generated number and show result.done

const randomNumber = Math.floor(Math.random() * 10 + 1);

// console.log(randomNumber)

const answers = await inquirer.prompt([
    {
        name: "userguessedNumber",
        type: "number",
       message: "Please guess a number between 1 to 10:",

    }
]);


if (answers.userguessedNumber === randomNumber){
    console.log("Congratulation you guessed right number")
} else{
    console.log("You guessed wrong number")
}
