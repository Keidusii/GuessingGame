// Validates if max number is a valid input
let validMax = false;
while (validMax == false) {
    if (max != NaN && max > 0) {
        max = Math.round(max);
        validMax = true;
    }
    else{
        max = prompt("What do you want to maximum number to be?");
        max = Number(max);
    }
}

document.getElementById("max").innerHTML = `Guess a number between 1 and ${max}.`;

// Initializing variables
let num = Math.floor(Math.random() * max + 1);
let guesses = [];

// Keeps track of guesses and determines if guess is equal to the random number
function highLow() {
    let guess = document.getElementById("guess").value;
    guess = Number(guess);
    // Checks to see if guess has been duplicated
    for (let i = 0; i < guesses.length; i++) {
        if (guess == guesses[i]) {
            document.getElementById("result").innerHTML = "<p id='bad'>You already guess that! Try again!</p>";
            return;
        }
    }

    if (guess != NaN && guess > 0 && guess <= max) {
        // Pushes guess into array and checks if guess is equal to random number
        guesses.push(guess);
        if (guess == num) {
            // Determines whether singular or plural form of "try" should be used
            let tries = "tries";
            if (guesses.length == 1) {
                tries = "try";
            }
            document.getElementById("result").innerHTML = `<span id=correct>You got it! It took you ${guesses.length} ${tries} and your guesses were </span>`;
            // Writes guesses
            for (let i = 0; i < guesses.length; i++) {
                document.getElementById("result").innerHTML += `<span id=correct>${guesses[i]}</span>`;
                if (i != guesses.length - 1) {
                    document.getElementById("result").innerHTML += "<span id=correct>, </span>";
                }
            }
        }
        else if (guess > num) {
            document.getElementById("result").innerHTML = "<p id='incorrect'>No, try a lower number</p>";
        }
        else {
            document.getElementById("result").innerHTML = "<p id='incorrect'>No, try a higher number</p>";
        }
    }
    else {
        // Invalidates guess
        if (guess < 1 || guess > max) {
            document.getElementById("result").innerHTML = "<p id='bad'>That number is not in range, try again.</p>";
        }
        else {
            document.getElementById("result").innerHTML = "<p id='bad'>That is not a number!</p>";
        }
            
    }
}

