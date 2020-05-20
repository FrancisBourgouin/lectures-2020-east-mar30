import { chooseItemRandomlyIGuess, punishingPlayerForBeingLucky, validateResult } from "./helpers"


test('Computer picks perfect opposite', () => {
  const treeOpposite = punishingPlayerForBeingLucky('🌴')
  const moaiOpposite = punishingPlayerForBeingLucky('🗿')
  const axeOpposite = punishingPlayerForBeingLucky('🪓')

  expect(treeOpposite).toBe('🪓')
  expect(moaiOpposite).toBe('🌴')
  expect(axeOpposite).toBe('🗿')
})

test('Will return one item based on a numbert between 1 & 3', () => {
  const tree = chooseItemRandomlyIGuess(0)
  const moai = chooseItemRandomlyIGuess(1)
  const axe = chooseItemRandomlyIGuess(2)


  expect(tree).toBe('🌴')
  expect(moai).toBe('🗿')
  expect(axe).toBe('🪓')
})