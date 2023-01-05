

function startGame(param) {
const a = param
const choices = ["rock", "paper", "scissors"];
const random = Math.floor(Math.random() * choices.length);
const b = choices[random]

const playerchoice = document.getElementById('playerchoice')
const computerchoice = document.getElementById('computerchoice')
const result = document.getElementById('result')

if (a == 'rock') {
    playerchoice.src = "rock.svg"
} else if (a == 'paper') {
    playerchoice.src = "paper.svg"
} else if (a == 'scissors') {
    playerchoice.src = "scissors.svg"
}

if (b == 'rock') {
    computerchoice.src = "rockcomp.svg"
} else if (b == 'paper') {
    computerchoice.src = "papercomp.svg"
} else if (b == 'scissors') {
    computerchoice.src = "scissorscomp.svg"
}



let pointsplayer;
let pointscomputer;

console.log('You chose ' + a)
console.log('Computer chose ' + b)

if ((a == 'rock') && (b == 'scissors')) {
    alert('You won!')
    result.innerText = 'You won!'
    pointsplayer++
} else if ((a == 'rock') && (b == 'paper')) {
    alert('Computer won!')
    result.innerText = 'Computer won!'
    pointscomputer++
} else if ((a == 'scissors') && (b == 'paper')) {
    alert('You won!')
    pointsplayer++
} else if ((a == 'scissors') && (b == 'rock')) {
    console.log('Computer won!')
    pointscomputer++
}else if ((a == 'paper') && (b == 'rock')) {
    alert('You won!')
    pointsplayer++
}else if ((a == 'paper') && (b == 'scissors')) {
    alert('Computer won!')
    pointscomputer++
} else if (a == b) {
    alert(`It's a draw!`)
    pointsplayer++
    pointscomputer++
}

console.log(pointscomputer)
console.log(pointsplayer)

}



