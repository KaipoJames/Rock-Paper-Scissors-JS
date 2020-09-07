const game = () => {
  let pScore = 0;
  let cScore = 0;

  // Starts The Game
  const startGame = () => {
    const playButton = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playButton.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    var playerHand = document.getElementById("player-hand");
    var computerHand = document.getElementById("computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"];
    options.forEach((option) => {
      option.addEventListener("click", function () {
        //Computer Choice
        const computerNumber = Math.floor(
          Math.random() * computerOptions.length
        );
        var computerChoice = computerOptions[computerNumber];
        //Compare hands

        setTimeout(() => {
          compareHands(this.textContent, computerChoice);
          //Update Images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);

        //Add Animations
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    let scoreOfPlayer = pScore;
    let scoreOfComp = cScore;
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    if (playerScore) {
      playerScore.textContent = scoreOfPlayer;
    }
    if (computerScore) {
      computerScore.textContent = scoreOfComp;
    }
    endGame(scoreOfPlayer, scoreOfComp);
  };

  const endGame = (playerScore, computerScore) => {
    if (playerScore >= 5) {
      confirm("Player Wins! Click OK to play again!");
      location.reload();
    }
    if (computerScore >= 5) {
      confirm("Computer Wins! Click OK to play again!");
      location.reload();
    }
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie!";
      return;
    }
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "The Player Wins!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "The Computer Wins!";
        cScore++;
        updateScore();
        return;
      }
    }
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "The Computer Wins!";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "The Player Wins!";
        pScore++;
        updateScore();
        return;
      }
    }
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "The Computer Wins!";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "The Player Wins!";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  // Call All The Inner Functions
  startGame();
  playMatch();
};

// Start Game Function
game();
