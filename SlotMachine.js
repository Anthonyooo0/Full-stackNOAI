// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine 
// 5. Check if the user won
// 6. give the user their earnings or take their bet
// 7. prompt user to play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
}

const SYMBOL_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
}



const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit ammount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, Try Again.");
        } else {
          return numberDepositAmount;
        }
    }
};

const getNumberoOflines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberoflinesAmount = parseFloat(lines);

        if (isNaN(numberoflinesAmount) || numberoflinesAmount <= 0 || numberoflinesAmount < 3) {
            console.log("Invalid line amount, Try Again.");
        } else {
          return numberoflinesAmount;
        }
    }
};

const getBet = (balance, lines) => {
     while (true) {
        const bet = prompt("Enter the total bet per line: ");
        const numberbet = parseFloat(bet);

        if (isNaN(numberbet) || numberbet <= 0 || numberbet > balance / lines) {
            console.log("Invalid bet, Try Again.");
        } else {
          return numberbet;
        }
    }
};

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for(let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = [[], [], []];
    for (let i = 0; i < COLS; i++) {
        const reelsymbols = [...symbols];
        for (let j = 0; < ROWS; j++) {
            const randomindex = Math.floor(Math.random() * reelsymbols.length);
            const selectedSymbol = reelsymbols[randomindex];
            reels[i].push(selectedSymbol);
            reelsymbols.splice(randomindex, 1);
        }

    
    }
}


let balance = deposit();
const numberoflines = getNumberoOflines();
const bet = getbet(balance, numberoflines);





