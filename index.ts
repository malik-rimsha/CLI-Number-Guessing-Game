#! user/bin/env node

import inquirer from "inquirer";

console.log("Welcome to Malik Rimsha - CLI Number Guessing Game");

// 1) computer will generate a randome number -done.

// 2) user input for guessing number - done.

// 3) compare user input with computer generated number and show result - done.

const randomNumber = Math.floor(Math.random() * 6 + 1 );

const answers = await inquirer.prompt([
    {
        name : "userGuessedNumber",
        type : "number",
        message : "please guess a number in between 1 to 6: ",
    },
]);

console.log(answers);

if(answers.userGuessedNumber === randomNumber ) {
    console.log("congratulations! you guessed right number");
}else{
    console.log("you gessed wrong nmber");
}

