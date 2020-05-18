export const startRound = (value, state, updater) => {
  changeGameStatus("Active", updater)
  registerPlayerItem(value, updater)
  chooseRobotItem(checkCheatStatus(state), state.playerSelection, updater)
  announceResult(state.playerSelection, state.compSelection, updater)
}

export const changeGameStatus = (status, updater) => {
  return updater(prevState => ({ ...prevState, status }))
}

export const registerPlayerItem = (value, updater) => {
  return updater(prevState => ({...prevState, playerSelection:value}))
}

export const checkCheatStatus = (state) => {
  //Verify if computer is cheating
  return state.cheating
}

export const chooseRobotItem = (cheating, playerItem, updater) => {
  if (cheating) {
    switch(playerItem){
      case "Moai":
        return "Tree"
      case "Axe":
        return "Moai"
      case "Tree":
        return "Axe"
      default:
      break
    }
  }
  else{
    const choices = ["Moai","Axe","Tree"]
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]

  }
}

export const announceResult = (playerSelection, compSelection) => {
  switch(playerSelection){
    case "Moai":
      if(compSelection === "Tree"){
        return "Lost"
      }
      else if (compSelection === "Axe") {
        return "Won"
      }
      else {
        return "Tied"
      }
    case "Axe":
      if (compSelection === "Moai") {
        return "Lost"
      }
      else if (compSelection === "Tree") {
        return "Won"
      }
      else {
        return "Tied"
      }
    case "Tree":
      if (compSelection === "Axe") {
        return "Lost"
      }
      else if (compSelection === "Tree") {
        return "Won"
      }
      else {
        return "Tied"
      }
      default:
        return "Waiting"
  }
}

