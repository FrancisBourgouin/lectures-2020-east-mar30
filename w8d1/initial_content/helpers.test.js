import {changeGameStatus, registerPlayerItem, chooseRobotItem, checkCheatStatus, announceResult} from './helpers'

const fakeState = { 
  compSelection: null, 
  playerSelection: null, 
  status: 'Waiting', 
  cheating: false 
}

test('validates the cheat properly', () => {
  expect(checkCheatStatus(fakeState)).toBe(false)
})