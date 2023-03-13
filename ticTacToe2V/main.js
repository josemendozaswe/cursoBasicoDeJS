function ganador(userChoice, pcChoice) {
  switch (true) {
    case userChoice === "rock" && pcChoice === "paper":
      console.log("Skynet wins!");
      break;
    case userChoice === "paper" && pcChoice === "rock":
      console.log("Humanity wins!");
      break;
    case userChoice === "scissors" && pcChoice === "paper":
      console.log("Humanity wins!!");
      break;
    case userChoice === "paper" && pcChoice === "scissors":
      console.log("Skynet wins!");
      break;
    case userChoice === "rock" && pcChoice === "scissors":
      console.log("Humanity wins!!");
      break;
    case userChoice === "scissors" && pcChoice === "rock":
      console.log("Skynet wins!");
      break;
    default:
      console.log("It's a tie!");
  }
}
