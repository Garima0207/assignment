const readline = require('readline');

function guessNumberGame() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    
    rl.question('Guess a number between 1 and 10: ', (userInput) => {
        let userGuess = parseInt(userInput);

        if (userGuess === randomNumber) {
            console.log("Good Work! You guessed the correct number.");
        } else {
            console.log(`Not matched. The correct number was ${randomNumber}.`);
        }
        rl.close();
    });
}

guessNumberGame();
