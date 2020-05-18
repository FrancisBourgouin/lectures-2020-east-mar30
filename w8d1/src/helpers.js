// Display the winner
// Activate / validate the cheating status

// Computer player chooses randomly
// Computer player chooses the perfect choice when cheating

export const chooseItemRandomlyIGuess = (randomIndex) => {
  const selections = ["🌴", "🗿", "🪓"]
  if (randomIndex < 3) {
    return selections[randomIndex]
  } else {
    return "🐉"
  }
}

export const punishingPlayerForBeingLucky = (playerSelection) => {
  switch (playerSelection) {
    case "🌴":
      return "🪓";
    case "🗿":
      return "🌴";
    case "🪓":
      return "🗿";
  }
}

export const validateResult = (playerSelection, compSelection) => {
  switch (playerSelection) {
    case "🗿":
      if (compSelection === "🌴") {
        return "Lost";
      } else if (compSelection === "🪓") {
        return "Won";
      } else {
        return "Tied";
      }
    case "🪓":
      if (compSelection === "🗿") {
        return "Lost";
      } else if (compSelection === "🌴") {
        return "Won";
      } else {
        return "Tied";
      }
    case "🌴":
      if (compSelection === "🪓") {
        return "Lost";
      } else if (compSelection === "🗿") {
        return "Won";
      } else {
        return "Tied";
      }
      break;
    default:
      return "Waiting";
  }
};
