

function startGame(param) {
const a = param

// let random = Math.random() * 3;
const choices = ["rock", "paper", "scissors"];

const random = Math.floor(Math.random() * choices.length);
const b = choices[random]

console.log('player chose ' + a)
console.log('computer chose ' + b)

if ((a == 'rock') && (b == 'scissors')) {
    console.log(b)
    console.log('player won!')
} else if ((a == 'rock') && (b == 'paper')) {
    console.log(b)
    console.log('computer won!')
} else if ((a == 'scissors') && (b == 'paper')) {
    console.log(b)
    console.log('player2 won')
} else if ((a == 'scissors') && (b == 'rock')) {
    console.log(b)
    console.log('computer3 won!')
}else if ((a == 'paper') && (b == 'rock')) {
    console.log(b)
    console.log('player4 won!')
}else if ((a == 'paper') && (b == 'scissors')) {
    console.log(b)
    console.log('computer5 won!')
} else if (a == b) {
    console.log('draw')
}

}



