function startGame(param) {
  const a = param;
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choices.length);
  const b = choices[random];

  const playerchoice = document.getElementById("playerchoice");
  const computerchoice = document.getElementById("computerchoice");
  const result = document.getElementById("result");

  if (a == "rock") {
    playerchoice.src = "rock.svg";
  } else if (a == "paper") {
    playerchoice.src = "paper.svg";
  } else if (a == "scissors") {
    playerchoice.src = "scissors.svg";
  }

  if (b == "rock") {
    computerchoice.src = "rockcomp.svg";
  } else if (b == "paper") {
    computerchoice.src = "papercomp.svg";
  } else if (b == "scissors") {
    computerchoice.src = "scissorscomp.svg";
  }

  if (a == "rock" && b == "scissors") {
    result.innerText = "You won!";
  } else if (a == "rock" && b == "paper") {
    result.innerText = "Computer won!";
  } else if (a == "scissors" && b == "paper") {
    result.innerText = "You won!";
  } else if (a == "scissors" && b == "rock") {
    result.innerText = "Computer won!";
  } else if (a == "paper" && b == "rock") {
    result.innerText = "You won!";
  } else if (a == "paper" && b == "scissors") {
    result.innerText = "Computer won!";
  } else if (a == b) {
    result.innerText = `It's a draw!`;
  }
}
