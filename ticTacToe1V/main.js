function ganador(userChoice, pcChoice) {
  if (userChoice == "rock" && pcChoice == "paper") {
    return (resultado = "Skynet wins!");
  } else if (userChoice == "paper" && pcChoice == "rock") {
    return (resultado = "Humanity wins");
  } else if (userChoice == "paper" && pcChoice == "scissors") {
    return (resultado = "Skynet wins!");
  } else if (userChoice == "scissors" && pcChoice == "paper") {
    return (resultado = "Humanity wins");
  } else if (userChoice == "scissors" && pcChoice == "rock") {
    return (resultado = "Skynet wins!");
  } else if (userChoice == "rock" && pcChoice == "scissors") {
    return (resultado = "Humanity wins");
  } else {
    return (resultado = "It's a tie!");
  }
}
